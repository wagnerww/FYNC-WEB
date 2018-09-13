import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceEsportes } from '../interfaces/esportes.interface';
import { ModelEsportes } from '../models/Esportes.model';

@Injectable({
  providedIn: 'root'
})
export class EsportesService {

  constructor(private http:HttpClient) {}

  cadastrarEsporte(esporte:ModelEsportes):Observable<any>{
    let teste:any = [];
    console.log('ModelEsportes', ModelEsportes);
    return teste;
    //return this.http.post<InterfaceEsportes>('http://localhost:8080/cadastraresporte', esporte);
  }

}
