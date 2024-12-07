import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.css']
})
export class RainbowComponent {
  tableau = [
    'blue',
    'lightblue',
    'coral',
    'green',
    'yellow',
    'lightgreen',
    'lightyellow',
    'gold',
    'gray',
    'purple',
    'pink',
    'orange'

  ];
  @HostBinding('style.borderColor') bc:string = 'black';
  @HostBinding('style.color') color: string = 'black';
  inputText: string = '';
  @HostListener('input', ['$event']) changeColor(event: any){
    const index = Math.floor(Math.random() * this.tableau.length);
    this.bc = this.tableau[index];
    this.color = this.tableau[index];
    event.target.style.color = this.color;

  }

}
