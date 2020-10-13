import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from '../Model/Servicio';
import { ServiceService } from '../Services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']  
})
export class ConsultaComponent implements OnInit {

  servicios : Servicio[];
  servicios2 : Servicio[];
  sumaHoras = 0;
  valores  = [] ;

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(){
    this.service.getServicios().subscribe(data =>{ this.servicios =data  })
    
    
  }

  
  

}
