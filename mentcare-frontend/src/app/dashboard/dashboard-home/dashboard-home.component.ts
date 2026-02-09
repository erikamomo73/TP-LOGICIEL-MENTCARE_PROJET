import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import Chart from 'chart.js/auto';

@Component({
  selector:'app-dashboard-home',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./dashboard-home.component.html',
  styleUrls:['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit, AfterViewInit {

  stats:any = {};
  recentPatients:any[]=[];
  alertes:any[]=[];
  chart:any;

  constructor(private api:ApiService){}

  ngOnInit(){

    // statistiques
    this.api.getStats().subscribe((data:any)=>{

      this.stats = data;

      // créer graphique après récupération data
      this.createChart();

    });

    // patients récents
    this.api.getPatients().subscribe((data:any)=>{
      this.recentPatients = data.results.slice(0,5);
    });

  }

  ngAfterViewInit(){}

  createChart(){

    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart("statsChart", {

      type:'bar',

      data:{
        labels:['Patients','Consultations','Alertes','Risque'],
        datasets:[{
          label:'Statistiques',
          data:[
            this.stats.total_patients || 0,
            this.stats.total_consultations || 0,
            this.stats.total_alertes || 0,
            this.stats.patients_risque || 0
          ]
        }]
      }

    });

  }

}

