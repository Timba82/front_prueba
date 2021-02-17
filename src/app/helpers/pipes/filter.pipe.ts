import { Pipe, PipeTransform } from '@angular/core';
import { Images } from 'src/app/interfaces/images/images.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: Images[], filteringString: string, ...arg: string[]): Images[] {
    if (value.length === 0 || !filteringString) {
      return value;
    }
    const resultArray = [];
    for (const spreadArgument of arg) {
      resultArray.push(
        value.filter((item) =>
          item[spreadArgument].toString().includes(filteringString)
        )
      );
    }
    return [].concat(...resultArray);
  }
}
