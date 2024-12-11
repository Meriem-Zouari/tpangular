import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];

  constructor() { 
    this.personnes= [
      new Personne(1 , 'zouari','meriam',22, 'assets/img1.jpg',88888,'AIstudent'),
      new Personne(2 , 'mrad','imtiez',21, 'assets/images/rotating_card_profile2.png',999999,'MLstudent'),
      new Personne(3 , 'charfeddin','elyes',23, 'assets/images/rotating_card_profile3.png',10101010,'devstudent'),
      new Personne(4 , 'image','pipeexample',50, '',5555555,'pipeexample'),

    ];
  }
  getPersonnes():Personne[]{
    return this.personnes;
  }
  getPersonneById(id : number):Personne | undefined{
    const personne = this.personnes.find( personne =>{
      return personne.id == id
    });
    return personne;
  }

  deleteCv(id: number): void {
    this.personnes = this.personnes.filter((personne) => personne.id !== id);
  }

}
