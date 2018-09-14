import { Component, OnInit } from '@angular/core';
import { StatusEsporte } from '../../enums/status-esporte.enum';

@Component({
  selector: 'app-cadastro-esportes',
  templateUrl: './cadastro-esportes.component.html',
  styleUrls: ['./cadastro-esportes.component.css']
})
export class CadastroEsportesComponent implements OnInit {

  statusEsporte = StatusEsporte;
  
  //keys:string[];
  
  
  constructor() { 
   
  }

  ngOnInit() {
    let statusEsporte = this.transform(StatusEsporte);
  }

  transform(value) : any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
        keys.push({value: enumMember, description: value[enumMember]});        
      } 
    }
    console.log(keys);
    return keys;
  }

}
