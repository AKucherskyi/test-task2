import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    switch (value) {
      case null:
        return `it's unknown`;
      case false:
        return '✖';
      case true:
        return '✔';
      default:
        return value;
    }
  }
}
