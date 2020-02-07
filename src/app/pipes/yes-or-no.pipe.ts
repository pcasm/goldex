import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesOrNo'
})
export class YesOrNoPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'true') return 'Yes';
    else return 'No';
  }

}
