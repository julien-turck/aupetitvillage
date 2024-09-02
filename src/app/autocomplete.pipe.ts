import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {

  transform(produits: any[], value:string): any[] {
    return produits.filter(produit => produit.toLowerCase().includes(value.toLowerCase()));
  }

}
