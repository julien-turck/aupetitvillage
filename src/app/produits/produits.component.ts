import { Component, Input, OnInit } from '@angular/core';
import { modele } from '../modeles/produitsModele';
import { produitsService } from '../services/produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {

  @Input() produit!: modele;

  likeButtonText!: string;
  userHasLike!: boolean;

  constructor(private produitsService: produitsService,
              private router: Router) {}

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
      this.produitsService.snapProduitsById(this.produit.id, "like");
      this.likeButtonText = "je n'aime plus";
      this.userHasLike = true;
    }
    dislike() {
      this.produitsService.snapProduitsById(this.produit.id, "dislike");
      this.likeButtonText = "j'aime";
      this.userHasLike = false;
    }
    onViewProduit(){
      this.router.navigateByUrl(`produit/${this.produit.id}`);
    }    
}

