import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carree'
})
export class CarreePipe implements PipeTransform {

  transform(element: number): number {
     const result = element * element;
     console.log({ result });
     return result;
  }

}
