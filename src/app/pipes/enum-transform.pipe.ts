import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumTransform'
})
export class EnumTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let items: any[] = [];
        for (let key in value){
            var isValueProperty = parseInt(key, 10) >= 0;
            if(!isValueProperty) continue;
            items.push({value: key, description: value[key]});
        }
    return items;
  }

}
