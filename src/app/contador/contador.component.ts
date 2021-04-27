import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template:
    `<h1>{{ title }}</h1>
    <h3>La base es: <strong> 55 </strong></h3>
    
    
    <button (click)=" sumar() ">{{ base }}</button>
    <span> {{numero}} </span>
    <button (click)=" restar() ">- {{base}}</button>`



})
export class ContadorComponent {
    title:String = 'Portafolios';
    numero:number = 0;
    base:number = 5;
  
  
  
    sumar(){
      this.numero +=this.base;
  
    }
    restar(){
      this.numero = this.numero -this.base;
      
    }
}