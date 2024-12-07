import { Component } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  personnes: Personne[]=[];
  constructor(private embaucheService:EmbaucheService){}

  ngOnInit(){
    this.personnes = this.embaucheService.getEmbauche();
  }


}
