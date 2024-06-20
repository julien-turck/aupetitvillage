import { Injectable } from "@angular/core";
import { modele } from "../modeles/produitsModele";

@Injectable({
    providedIn: 'root'
})
export class produitsService {
    private produitsServiceArray: modele[] = [
        new modele(
        "Asterix",
        "family.png",
        "Figurine d'Asterix",
        30,
        200,
      ).withStock(20),
      new modele(
        "Obelix",
        "family.png",
        "Figurine d'Obelix",
        19,
        56,
      ).withStock(5),
      new modele(
        "Panoramix",
        "family.png",
        "Figurine de Panoramix",
        23,
        130,
      ).withStock(0),
      new modele(
        "Cesar",
        "family.png",
        "Figurine de Cesar",
        25,
        0,
      ).withStock(18),
    ]

    getProduitsServiceArray(): modele[] {
        return [...this.produitsServiceArray];
    }
}