import { Injectable } from '@angular/core';
import { modele } from '../modeles/produitsModele';
import { likesType } from '../modeles/like-type.type';

@Injectable({
  providedIn: 'root',
})
export class produitsService {
  private produitsServiceArray: modele[] = [
    new modele(
      'Asterix',
      'asterix.jpg',
      "Figurine d'Asterix",
      30,
      200
    ).withStock(20),
    new modele('Obelix', 'obelix.jpg', "Figurine d'Obelix", 19, 56).withStock(
      5
    ),
    new modele(
      'Panoramix',
      'panoramix.jpg',
      'Figurine de Panoramix',
      23,
      130
    ).withStock(0),
    new modele('Cesar', 'cesar.jpg', 'Figurine de Cesar', 25, 0).withStock(17),
    new modele(
      'Abraracourcix',
      'abraracourcix.jpg',
      "Figurine d'Abraracourcix",
      30,
      200
    ).withStock(20),
    new modele(
      'Asterix au jeux olympiques',
      'asterix au jeux olympiques.jpg',
      "Edition limitée tirée des aventures d'Asterix au jeux olympiques",
      30,
      200
    ).withStock(20),
    new modele(
      'Assurancetourix',
      'assurancetourix.jpg',
      "Figurine d'Assurancetourix",
      30,
      200
    ).withStock(20),
    new modele(
      'Centurion',
      'centurion.jpg',
      "Figurine d'un centurion romain",
      30,
      200
    ).withStock(20),
  ];

  getProduitsServiceArray(): modele[] {
    return [...this.produitsServiceArray];
  }

  getProduitById(produitsId: string): modele {
    const foundProduit = this.produitsServiceArray.find(
      (modele) => modele.id === produitsId
    );
    if (!foundProduit) {
      throw new Error('Produit non reconnu');
    }
    return foundProduit;
  }

  snapProduitsById(produitsId: string, likesType: likesType): void {
    const foundProduit = this.getProduitById(produitsId);
    foundProduit.likes(likesType);
  }
}
