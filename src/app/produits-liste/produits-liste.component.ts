import { Component, OnInit } from '@angular/core';
import { modele } from '../modeles/produitsModele';

@Component({
  selector: 'app-produits-liste',
  templateUrl: './produits-liste.component.html',
  styleUrl: './produits-liste.component.css'
})
export class ProduitsListeComponent implements OnInit{
  produitsArray!: modele[]

  ngOnInit(): void {
    this.produitsArray = [
      new modele(
        "Asterix",
        "family.png",
        "Figurine d'Asterix",
        20,
        200,
      ),
      new modele(
        "Obelix",
        "family.png",
        "Figurine d'Obelix",
        18,
        56,
      ),
      new modele(
        "Panoramix",
        "family.png",
        "Figurine de Panoramix",
        23,
        130,
      ),
      new modele(
        "Cesar",
        "family.png",
        "Figurine de Cesar",
        25,
        0,
      ),
    ]
    this.produitsArray[0].setStock(20);
    this.produitsArray[1].setStock(6);
    this.produitsArray[2].setStock(0);
    this.produitsArray[3].setStock(43);
  }
}
