import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idformat'
})
export class IdformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "ID -"+value;
  }

}
