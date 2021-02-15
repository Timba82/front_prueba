import { Pipe, PipeTransform } from '@angular/core';
import { Images } from 'src/app/interfaces/images/images.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: Images[], filteringString: any, ...arg: any): any {
    if (value.length === 0 || filteringString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      for (const spreadArgument of arg) {
        if (item[spreadArgument].toString().includes(filteringString)) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }
}
