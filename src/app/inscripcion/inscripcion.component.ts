import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Servicio } from '../Model/Servicio';
import { ServiceService } from '../Services/service.service';


@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  

  It: String;
  Is: String;

  //fecha
  modelInicial: NgbDateStruct;
  dateInicial: {year: number, month: number};

  modelFinal: NgbDateStruct;
  dateFinal: {year: number, month: number};

  //hora
  timeInicial: {hour: 10, minute: 30};
  meridianI = true;
  timeFinal: {hour: 10, minute: 30};
  meridianF = true;
  
    

  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(servicio: Servicio){
  
    
    this.service.crearServicio(servicio).subscribe(data =>{
      alert("Ser agrego el servicio!");
      this.router.navigate(["consulta"])      
    })
  
  }

}
