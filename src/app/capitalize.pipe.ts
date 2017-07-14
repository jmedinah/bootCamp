import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let words = value.split(' ');
    let sentece: string = '';
    for (let key of words) {
      sentece = sentece + " " + key.charAt(0).toUpperCase() + key.slice(1);
    }
    return sentece;
  }

}
