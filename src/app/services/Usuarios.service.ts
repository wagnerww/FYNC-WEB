import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceUsuario } from '../interfaces/Usuario.interface';
import { ModelUsuario } from '../models/Usuario.model';
import { SocialUser } from '../../../node_modules/angular5-social-login';
import { StatusUsuario } from '../enums/status-usuario.enum';


@Injectable()
export class UsuariosService {

  Model:ModelUsuario;

  constructor(private http:HttpClient) { }

  listarTodosUsuario(skip, limit):Observable<InterfaceUsuario>{
   const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const obj = {
      skip:skip,
      limit:limit
    }
      return this.http.post<InterfaceUsuario>('http://localhost:8080/listarUsuarios', obj);
  }
//
  SocialLogin(Login:SocialUser){
    this.Model.UsuEmail  = Login.email;
    this.Model.UsuNome   = Login.name;
    this.Model.UsuStatus = StatusUsuario.Ativo;
    this.CadastrarUsuario(this.Model);
  }

  CadastrarUsuario(Model:ModelUsuario){
    Model.UsuDtaRegistro = new Date();
    console.log('model ', Model);
    this.http.post<InterfaceUsuario>('http://localhost:8080/listarUsuarios', Model);
  }

}