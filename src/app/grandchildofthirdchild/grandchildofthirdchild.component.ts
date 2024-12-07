import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-grandchildofthirdchild',
  templateUrl: './grandchildofthirdchild.component.html',
  styleUrls: ['./grandchildofthirdchild.component.css']
})
export class GrandchildofthirdchildComponent implements OnInit {

  @Input() filsProperty: string = '';
  @Output() sendFavoriteColor = new EventEmitter<string>();
  ngOnInit(){
    console.log('childcomponent :this is the color of my parent ', this.filsProperty)
  }
  FavoriteColor = "pink";
  sendColor(){
    this.sendFavoriteColor.emit(this.FavoriteColor);
  }

}
