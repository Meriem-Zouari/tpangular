import { Component , OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  personnes: Personne []=[];
  selectedPersonne !: Personne ;
  constructor(
    private cvService: CvService
  ){}

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();  
  }
  
  selectPersonne(personne : Personne){
    this.selectedPersonne  = personne;
  }


}
