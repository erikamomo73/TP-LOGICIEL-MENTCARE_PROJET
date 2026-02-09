import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
 standalone:true,
 selector:'app-consultations',
 imports:[CommonModule,FormsModule],
 templateUrl:'./consultations.component.html',
 styleUrls:['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit{

 consultations:any[]=[];
 newConsultation:any={};

 constructor(private api:ApiService){}

 ngOnInit(){
   this.load();
 }

 load(){
   this.api.getConsultations().subscribe((data:any)=>{
     this.consultations=data.results ?? data;
   });
 }

 add(){
   this.api.addConsultation(this.newConsultation).subscribe(()=>{
     this.newConsultation={};
     this.load();
   });
 }

}
