import { Component } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  personne ?: Personne;
  constructor(
    private cvService:CvService,
    private activateRoute : ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.activateRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.getPersonneById(params['id']);
      }
    )
  }
  deleteCv(): void {
    if (this.personne) {
      this.cvService.deleteCv(this.personne.id);
      this.router.navigate(['/cv']);
    }
  }


}
