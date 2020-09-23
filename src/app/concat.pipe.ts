import { Pipe, PipeTransform } from '@angular/core';
import { MasterListRecords } from './interfaces/master-list-response';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {
  matchedProperties: string[];
  alignedWith: string[];
  transform(startup: MasterListRecords, query: string): MasterListRecords {
    if (startup) {
      this.matchedProperties = [];
      let matches = [];
      for (let [key, value] of Object.entries(startup.fields)) {
        if (value.toLowerCase().includes(query)) {
          matches.push(key);
        }
      }
      if (startup.fields.Alignment) {
        startup.fields['Alignment'] = startup.fields.Alignment.split(',').sort();
      }
      if (startup.fields["Theme(s)"]) {
        startup.fields["Theme(s)"] = startup.fields["Theme(s)"].split(',').sort();
      }
      if (startup.fields["Company Website"]) {
        startup.fields["Company Website"] = startup.fields["Company Website"].replace(' ', '');
      }
      if (startup.fields["Technology Areas"]) {
        startup.fields["Technology Areas"] = startup.fields["Technology Areas"].split(',').sort();
      }
      let merged = matches.join(', ')
      this.matchedProperties.push(merged);
      matches = [];
      startup['matches'] = this.matchedProperties;
    }
    return startup;
  }
}
