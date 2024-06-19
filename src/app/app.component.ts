import { Component, OnInit } from '@angular/core';
import { ProduitsComponent } from './produits/produits.component';
import { modele } from './modeles/produitsModele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  produitsArray!: modele[]

  Asterix!: modele;
  Obelix!: modele;
  Panoramix!: modele;
  Cesar!: modele;

  ngOnInit(): void {
    this.produitsArray = [
      new modele(
        "Asterix",
        "family.png",
        "Figurine d'Asterix",
        20,
        0,
      ),
      new modele(
        "Obelix",
        "family.png",
        "Figurine d'Obelix",
        18,
        0,
      ),
      new modele(
        "Panoramix",
        "family.png",
        "Figurine de Panoramix",
        23,
        0,
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
