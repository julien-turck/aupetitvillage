import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { modele } from '../modeles/produitsModele';
import { produitsService } from '../services/produits.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-produits',
  templateUrl: './single-produits.component.html',
  styleUrl: './single-produits.component.css'
})
export class SingleProduitsComponent implements OnInit {

  produit!: modele;
  likeButtonText!: string;
  userHasLike!: boolean;

  constructor(private produitsService: produitsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.prepareInterface();
      this.getProduit();
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
    private prepareInterface(){
      this.likeButtonText = "j'aime";
      this.userHasLike = false;
    }
    private getProduit() {
      const produitId = this.route.snapshot.params['id'];
      this.produit = this.produitsService.getProduitById(produitId);
    }
}

