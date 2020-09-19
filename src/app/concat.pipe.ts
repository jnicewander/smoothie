import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(startupArray, matchedArray): void {
    if (startupArray) {
      startupArray.forEach((obj, i) => {
        obj['matches'] = matchedArray[i];
      })
    }
    return startupArray;
  }
}
