import { Component, Input, OnInit } from '@angular/core';
import { modele } from '../modeles/produitsModele';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {

  @Input() produit!: modele;

  likeButtonText!: string;
  userHasLike!: boolean;

  ngOnInit(): void {
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
      this.produit.likePlus();
      this.likeButtonText = "je n'aime plus";
      this.userHasLike = true;
    }
    dislike() {
      this.produit.likeMoins();
      this.likeButtonText = "j'aime";
      this.userHasLike = false;
    }    
}

