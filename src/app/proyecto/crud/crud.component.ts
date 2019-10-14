import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms'; 
import { Usuario } from '../usuario';
import { MetodosService} from '../metodos.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
  
  
})
export class CrudComponent implements OnInit {

  constructor(private s: MetodosService) {             
              }
            


  ngOnInit() {
    this.listar();
  }
alerta1:boolean=false;
alerta2:boolean=false;   
  crearuser(formulario: NgForm){
   this.s.crear(formulario.value)
    .subscribe(res=>{
      console.log(res);
      this.listar();
     if(res==='ok'){
        this.alerta1=true;
      }else if(res){
        this.alerta2=true;
      }
    });
    console.log(formulario.value);
    formulario.reset();
    this.s.user=new Usuario();

  }

  listar(){
    this.s.getUser()
      .subscribe(res => {
        this.s.u = res as Usuario[];
        console.log(res);
      });
  }

}
