import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  prenom="";
  nom="";
  sujet="";
  email="";
  texte="";
  message="Merci de remplir tous les champs afin que nous puissions vous répondre au mieux";

  onSubmit() {
    if(!this.prenom || !this.nom || !this.sujet || !this.email || !this.texte){
      this.message = "Merci de remplir tous les champs afin que nous puissions vous répondre au mieux";
    }else{
      this.message = "Votre message a bien été envoyé";
      this.prenom="";
      this.nom="";
      this.sujet="";
      this.email="";
      this.texte="";
    }
  }
}
