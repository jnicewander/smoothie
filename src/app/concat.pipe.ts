import { Pipe, PipeTransform } from '@angular/core';
import { MasterListRecords } from './interfaces/master-list-response';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {
  matchedProperties: string[];
  transform(startup: MasterListRecords, query: string): MasterListRecords {
    if (startup) {
      this.matchedProperties = [];
      let matches = [];
      for (let [key, value] of Object.entries(startup.fields)) {
        if (value.toLowerCase().includes(query)) {
          matches.push(key);
        }
      }
      let merged = matches.join(', ')
      this.matchedProperties.push(merged);
      matches = [];
      startup['matches'] = this.matchedProperties;
    }
    console.log(startup);
    return startup;
  }
}
