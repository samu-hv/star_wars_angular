import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUrl'
})
export class FormatUrlPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.replace(/ /g, '-');
  }
}
