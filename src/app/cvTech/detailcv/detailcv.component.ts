import { Component, Input } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent {
  @Input() personne !: Personne;
  constructor(
    private embaucheService : EmbaucheService
  ){}

  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }

}
