import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPriceDec'
})
export class SortByPriceDecPipe implements PipeTransform {

  transform(produits: any[]): any[] {
    return produits.sort((a:any,b:any) => {
      if(a.prix < b.prix) { return -1;}
      else if (a.prix > b.prix) {return 1;}
      else return 0;
    })
  }

}
