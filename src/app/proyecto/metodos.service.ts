import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from './usuario';
 

@Injectable({
  providedIn: 'root'
})
export class MetodosService {
  u:Usuario[];
user:Usuario;
ruta = "http://localhost:4000/index";
  constructor(private cli: HttpClient ) {
    this.user = new Usuario();
   }
getUser(){
  return this.cli.get(this.ruta);
}
crear(usuario: Usuario){
  return this.cli.post(this.ruta, usuario);
  }

}
