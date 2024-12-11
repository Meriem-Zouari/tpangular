import { Component, Input } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { EmbaucheService } from '../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent {
  @Input() personne !: Personne;
  constructor(
    private embaucheService : EmbaucheService,
    private router : Router
  ){}

  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo(){
    const link =['cv',this.personne.id];
    this.router.navigate(link);
  }


}
