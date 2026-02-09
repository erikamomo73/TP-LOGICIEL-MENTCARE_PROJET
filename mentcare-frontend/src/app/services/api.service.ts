import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class ApiService {

  // URL BACKEND DJANGO
  apiUrl='http://127.0.0.1:8000/api';

  constructor(private http:HttpClient){}

  // ======================
  // HEADER JWT AUTOMATIQUE
  // ======================

  private getHeaders(){

    const token=localStorage.getItem('token');

    return new HttpHeaders({
      Authorization:`Bearer ${token}`
    });

  }

  // ======================
  // DASHBOARD
  // ======================

  getStats(){

    return this.http.get(
      `${this.apiUrl}/reports/stats/`,
      { headers:this.getHeaders() }
    );

  }

  // ======================
  // PATIENTS
  // ======================

  getPatients(){

    return this.http.get(
      `${this.apiUrl}/patients/`,
      { headers:this.getHeaders() }
    );

  }

  getPatient(id:number){

    return this.http.get(
      `${this.apiUrl}/patients/${id}/`,
      { headers:this.getHeaders() }
    );

  }

  addPatient(data:any){

    return this.http.post(
      `${this.apiUrl}/patients/`,
      data,
      { headers:this.getHeaders() }
    );

  }

  deletePatient(id:number){

    return this.http.delete(
      `${this.apiUrl}/patients/${id}/`,
      { headers:this.getHeaders() }
    );

  }

  // ======================
  // CONSULTATIONS
  // ======================

  getConsultations(){

    return this.http.get(
      `${this.apiUrl}/consultations/`,
      { headers:this.getHeaders() }
    );

  }

  addConsultation(data:any){

    return this.http.post(
      `${this.apiUrl}/consultations/`,
      data,
      { headers:this.getHeaders() }
    );

  }

  // ======================
  // REPORTS ANALYTICS
  // ======================

  getMonthlyReport(){

    return this.http.get(
      `${this.apiUrl}/reports/monthly/`,
      { headers:this.getHeaders() }
    );

  }

}
