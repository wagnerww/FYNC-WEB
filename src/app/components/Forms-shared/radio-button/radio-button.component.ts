import { Component, OnInit, Input, forwardRef } from '@angular/core';
//import {NgModel, FormControlName} from '@angular/forms';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(() => RadioButtonComponent),
    multi:true
  }]
})

export class RadioButtonComponent implements OnInit {

  @Input() options :any;

  value:any;
  onChange:any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj:any):void{
    this.value = obj;
  }

  registerOnChange(fn:any):void{
    this.onChange = fn;
  } 

  registerOnTouched(r:any):void{
    
  }


}
