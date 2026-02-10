import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
 standalone:true,
 imports:[CommonModule],
 templateUrl:'./patient-detail.component.html',
 styleUrls:['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit{

 patient:any;

 constructor(private route:ActivatedRoute, private api:ApiService){}

 ngOnInit(){

   const id=this.route.snapshot.params['id'];

   this.api.getPatient(id).subscribe((data:any)=>{
     this.patient=data;
   });

 }

}
