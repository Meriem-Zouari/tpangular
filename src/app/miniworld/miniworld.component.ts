import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miniworld',
  templateUrl: './miniworld.component.html',
  styleUrls: ['./miniworld.component.css']
})
export class MiniworldComponent {
  @Input() color = 'white';
  @Input() size = '20px';
  @Input() font = 'Arial';

  changeSize(size:number){
    this.size = size + 'px';
  }
  changeFont(selectedFont: string): void {
    this.font = selectedFont;
  }

}
