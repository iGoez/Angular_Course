import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  ngOnInit(): void {
  }

  nuevo:Personaje={
    nombre:"",
    poder:0
  }

  constructor(private dbzService:DbzService){
    
  }

  agregar():void{
    if (this.nuevo.nombre.trim().length==0) {
      return;
    }

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre:"",
      poder:0
    }
  }

}
