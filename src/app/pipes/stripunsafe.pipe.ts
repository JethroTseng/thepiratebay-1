import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stripunsafe'
})

export class StripunsafePipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return null;
    }
    const len = value.length;
    value = 'magnet:' + value.slice(7);
    // console.log(value);
      return value;
  }
}
