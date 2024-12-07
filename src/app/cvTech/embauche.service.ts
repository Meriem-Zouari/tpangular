import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes: Personne[];

  constructor() { 
    this.personnes = [];
  }
  getEmbauche(): Personne[]{
    return this.personnes;
  }
  embaucher(personne:Personne):void{
    const index = this.personnes.indexOf(personne);
    if(index < 0){
      this.personnes.push(personne);
    } else{
      alert('already selected person');
    }
  }
  debaucher(personne: Personne):void{
    const index = this.personnes.indexOf(personne);
    if(index>=0){
      this.personnes.splice(index , 1);
    }

  }

}
