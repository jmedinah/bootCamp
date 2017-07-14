import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeVersion'
})
export class RemoveVersionPipe implements PipeTransform {

  transform(value: any, args?: any): any {

      let result = value;

      if (value.includes("/")) {
        if (value.includes("~"))
          result = value.match(/\/(.*)~/).pop();
        if (value.includes("^"))
          result = value.match(/\/(.*)\^/).pop();
      } else {
        if (value.includes("~"))
          result = value.substring(0, value.indexOf("~"));
        if (value.includes("^"))
          result = value.substring(0, value.indexOf("^"));
      }
      return result.trim();
  }

}
