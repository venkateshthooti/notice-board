import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camel'
})
export class CamelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value !== 'string') {
      return value; // Return the value as-is if it's not a string
    }

    return value
      .toLowerCase()
      .split(' ')
      .map((word, index) => 
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
  }

}
