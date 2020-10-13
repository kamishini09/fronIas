import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../Model/Servicio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
   }
  
   Url='http://localhost:8080/servicios/listar';

   getServicios():Observable<Servicio[]>{ 
     return this.http.get<Servicio[]>(this.Url);
   }
   
   crearServicio(servicio: Servicio){
     return this.http.post<Servicio>(this.Url,servicio);

   }
   
}
