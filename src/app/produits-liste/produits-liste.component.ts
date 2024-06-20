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

  constructor (private produitsServiceListe: produitsService) {}

  ngOnInit(): void {
    this.produitsArray = this.produitsServiceListe.getProduitsServiceArray();
  }
}
