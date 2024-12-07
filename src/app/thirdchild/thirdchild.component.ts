import { Component } from '@angular/core';

@Component({
  selector: 'app-thirdchild',
  templateUrl: './thirdchild.component.html',
  styleUrls: ['./thirdchild.component.css']
})
export class ThirdchildComponent {
  color = 'orange';
  processColor(FavoriteColor: string){
    this.color= FavoriteColor;
  }

}
