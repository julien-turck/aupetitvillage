import { Component, Input, OnInit } from '@angular/core';
import { modele } from '../modeles/produitsModele';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {

  @Input() produit!: modele;

  name!: string;
  imageUrl!: string;
  description!: string;
  prix!: number;
  like!: number;
  likeButtonText!: string;
  userHasLike!: boolean;

  ngOnInit(): void {
      this.name = "Asterix";
      this.imageUrl = "family.png";
      this.description = "Figurine d'Asterix";
      this.prix = 20;
      this.like = 0;
      this.likeButtonText = "j'aime";
      this.userHasLike = false;
  }
   onLike(): void {
    if (this.userHasLike){
      this.dislike();
    }else{
      this.addLike();
    }
  }
    addLike() {
      this.like++;
      this.likeButtonText = "je n'aime plus";
      this.userHasLike = true;
    }
    dislike() {
      this.like--;
      this.likeButtonText = "j'aime";
      this.userHasLike = false;
    }    
}

