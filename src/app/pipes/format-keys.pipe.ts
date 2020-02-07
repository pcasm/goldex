import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatKeys'
})
export class FormatKeysPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/_/g, ' ');
  }

}
