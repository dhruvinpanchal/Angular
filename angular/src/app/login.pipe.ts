import { Pipe, PipeTransform } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Pipe({
  name: 'login',
  pure: false
})
export class LoginPipe implements PipeTransform {

  transform(value: any): string {
    return value.join(',');
  }

}