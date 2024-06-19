import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  name!: string;
  imageUrl!: string;
  description!: string;
  prix!: number;
  like!: number;

  ngOnInit(): void {
      this.name = "Asterix";
      this.imageUrl = "family.png";
      this.description = "Figurine d'Asterix";
      this.prix = 20;
      this.like = 0;
  }
}
