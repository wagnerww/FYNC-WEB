import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceUsuario } from '../interfaces/Usuario.interface';


@Injectable()
export class UsuariosService {

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

}
