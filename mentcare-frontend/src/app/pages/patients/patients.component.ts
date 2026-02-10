import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
 selector:'app-patients',
 standalone:true,
 imports:[CommonModule,FormsModule],
 templateUrl:'./patients.component.html',
 styleUrls:['./patients.component.css']
})
export class PatientsComponent implements OnInit{

 patients:any[]=[];
 newPatient:any={};

 constructor(private api:ApiService, private router:Router){}

 ngOnInit(){
   this.load();
 }

 load(){
   this.api.getPatients().subscribe((data:any)=>{
     this.patients=data.results ?? data;
   });
 }

 add(){
   this.api.addPatient(this.newPatient).subscribe(()=>{
     this.newPatient={};
     this.load();
   });
 }

 delete(id:number){
   this.api.deletePatient(id).subscribe(()=>{
     this.load();
   });
 }

 dossier(id:number){
   this.router.navigate(['/patients',id]);
 }

}
