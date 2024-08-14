import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(names: any[], value: any): any[] {
    return names.filter(name => name.toLowerCase().includes(value.toLocaleLowerCase()));
  }
}
