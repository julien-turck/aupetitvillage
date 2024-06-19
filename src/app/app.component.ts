import { Component, OnInit } from '@angular/core';
import { ProduitsComponent } from './produits/produits.component';
import { modele } from './modeles/produitsModele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  Asterix!: modele;
  Obelix!: modele;
  Panoramix!: modele;
  Cesar!: modele;

  ngOnInit(): void {
      this.Asterix = new modele(
        "Asterix",
        "family.png",
        "Figurine d'Asterix",
        20,
        0,
      );
      this.Obelix = new modele(
        "Obelix",
        "family.png",
        "Figurine d'Obelix",
        18,
        0,
      );
      this.Panoramix = new modele(
        "Panoramix",
        "family.png",
        "Figurine de Panoramix",
        23,
        0,
      );
      this.Cesar = new modele(
        "Cesar",
        "family.png",
        "Figurine de Cesar",
        25,
        0,
      );

    this.Asterix.setStock(20);
    this.Obelix.setStock(6);
    this.Panoramix.setStock(0);
    this.Cesar.setStock(43);
  }
}
