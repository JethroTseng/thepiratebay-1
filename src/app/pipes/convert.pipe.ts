import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'convert'
})

export class ConvertPipe implements PipeTransform {

  transform(value: any) {
    if (!value) {
      return null;
    }
    // const len = value.slice(1);
    // console.log('sliced = ' + len);

    // let floater = parseFloat(value);
    // floater *= 1e-9;

    // value = floater.toFixed(2);

    value *= 1e-9;
    value = value.toFixed(2);
    return value += ' GB';

  }
}
