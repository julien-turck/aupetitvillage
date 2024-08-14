import { Component, OnInit } from '@angular/core';
import { modele } from '../modeles/produitsModele';
import { produitsService } from '../services/produits.service';

@Component({
  selector: 'app-produits-liste',
  templateUrl: './produits-liste.component.html',
  styleUrl: './produits-liste.component.css'
})
export class ProduitsListeComponent implements OnInit{
  produitsArray!: modele[];
  sortButtonText = "Trier par prix décroissant";
  stateButtonText = true;
  mySearchString = [];

  constructor (private produitsServiceListe: produitsService) {}

  ngOnInit(): void {
    this.produitsArray = this.produitsServiceListe.getProduitsServiceArray();
  }
  sortButtonClick() {   
    if (this.stateButtonText == true){
      this.sortButtonText = "Trier par prix décroissant"
   }
    else {
      this.sortButtonText = "Trier par prix croissant"
    }
    this.stateButtonText = !this.stateButtonText
  }
}
