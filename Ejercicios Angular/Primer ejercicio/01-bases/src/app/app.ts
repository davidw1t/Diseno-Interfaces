import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('bases');

public  numero:number = 10;

/*Parte 1 del ejercicio
public sumar(): void{
  this.numero+=1
}

public restar(): void{
  this.numero-=1
}
  

  /*Parte 2 del ejercicio*/
  
  

  public sumarORestar(evento:Event):void{

    const boton= evento.target as HTMLButtonElement

    if (boton.innerHTML==='sumar'){
        this.numero+=1
    }else if(boton.innerHTML==='restar'){
        this.numero-=1
    }
  }




}
