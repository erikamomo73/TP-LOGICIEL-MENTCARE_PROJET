import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
 standalone:true,
 selector:'app-reports',
 imports:[CommonModule],
 templateUrl:'./reports.component.html',
 styleUrls:['./reports.component.css']
})
export class ReportsComponent implements OnInit{

 stats:any={}        // ⭐ AJOUT IMPORTANT
 monthly:any[]=[];

 constructor(private api:ApiService){}

 ngOnInit(){

   // récupérer stats dashboard
   this.api.getStats().subscribe((data:any)=>{
     this.stats=data;
   });

   // récupérer rapport mensuel
   this.api.getMonthlyReport().subscribe((data:any)=>{

     console.log("MONTHLY DATA =",data);

     this.monthly=data;

     this.createChart();

   });

 }

 createChart(){

   setTimeout(()=>{

     const labels=this.monthly.map(m=>m.month);
     const patients=this.monthly.map(m=>m.patients);
     const consultations=this.monthly.map(m=>m.consultations);

     const canvas:any=document.getElementById('analyticsChart');

     if(!canvas){
       console.log("Canvas introuvable");
       return;
     }

     new Chart(canvas,{

       type:'line',

       data:{
         labels:labels,
         datasets:[
           {
             label:'Patients',
             data:patients
           },
           {
             label:'Consultations',
             data:consultations
           }
         ]
       }

     });

   },500);

 }

}

