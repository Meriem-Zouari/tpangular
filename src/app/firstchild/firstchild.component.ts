import { Component } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent {
  color = 'orange';
  changeColor(input: HTMLInputElement){
    console.log(input.value);
    this.color = input.value;
    input.value='';

  }
  default(){
    this.color="orange";
  }
}
