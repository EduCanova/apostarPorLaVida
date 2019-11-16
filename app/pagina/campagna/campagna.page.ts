import { Component, OnInit } from '@angular/core';
import {ContenidoService, conte} from '../../servicios/contenido.service';


@Component({
  selector: 'app-campagna',
  templateUrl: './campagna.page.html',
  styleUrls: ['./campagna.page.scss'],
})
export class CampagnaPage implements OnInit {

  public contenidos: any =[];
  public contenidos2: any=[];

  constructor(public contserv: ContenidoService) { }

  ngOnInit() {
    this.contserv.getContenido().subscribe(cont => {
      this.contenidos= cont;
      this.contenidos2 =this.contenidos.filter(persona => persona.campEstado == true);

     
   }) 
  
  }

}
