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

  ngOnInit(): void {
      this.Asterix = new modele(
        "Asterix",
        "family.png",
        "Figurine d'Asterix",
        20,
        0,
      );
  }
}
