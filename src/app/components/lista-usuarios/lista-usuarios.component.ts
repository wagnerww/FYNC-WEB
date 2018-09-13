import { Component, OnInit } from '@angular/core';
import { InterfaceUsuario } from '../../interfaces/Usuario.interface';
import { UsuariosService } from '../../services/Usuarios.service';
import { ModelUsuario } from '../../models/Usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  InterfaceUsuario:InterfaceUsuario;
  Usuarios:ModelUsuario[];
  skip:number=0;
  limit:number=10;

  constructor(private service:UsuariosService) { }

  ngOnInit() {
   this.load(this.skip, this.limit)
  }

  load(skip, limit){
    this.service.listarTodosUsuario(skip, limit).subscribe(response => {
      this.InterfaceUsuario = response;
      console.log('Interface ',this.InterfaceUsuario);
      if(this.InterfaceUsuario.status===100){
        this.Usuarios = this.InterfaceUsuario.retornos.data;
        console.log('Users ',this.Usuarios);
      }
    });
  }

  nexPage(){
    this.skip += 10;
    this.load(this.skip, this.limit);
  } 

  previousPage(){
    this.skip -= 10;
    this.load(this.skip, this.limit);
  }

}
