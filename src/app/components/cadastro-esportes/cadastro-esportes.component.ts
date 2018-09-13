import { Component, OnInit } from '@angular/core';
import { StatusEsporte } from '../../enums/status-esporte.enum';

@Component({
  selector: 'app-cadastro-esportes',
  templateUrl: './cadastro-esportes.component.html',
  styleUrls: ['./cadastro-esportes.component.css']
})
export class CadastroEsportesComponent implements OnInit {

  statusEsporte:string[];
  
  constructor() { }

  ngOnInit() {
    var options = Object.keys(StatusEsporte);
    this.statusEsporte = options.slice(options.length / 2);
    console.log('esportes', this.statusEsporte);  
    
  }

}
