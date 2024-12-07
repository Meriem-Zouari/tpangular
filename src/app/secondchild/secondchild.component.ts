import { Component } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent {
  user = {
    firstName: 'meme',
    lastName: 'zouari',
    job: 'Student',
    pathToPhoto: 'assets/img1.jpg'
  };

}
