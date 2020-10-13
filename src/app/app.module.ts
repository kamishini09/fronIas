import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { HeaderComponent } from './header/header.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ServiceService } from './Services/service.service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    HeaderComponent,
    InscripcionComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule   
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
