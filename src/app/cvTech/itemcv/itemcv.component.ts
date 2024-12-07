import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/personne';
@Component({
  selector: 'app-itemcv',
  templateUrl: './itemcv.component.html',
  styleUrls: ['./itemcv.component.css']
})
export class ItemcvComponent implements OnInit {
  @Input() personne !: Personne;
  @Output()selectedPersonne = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
    
  }
  selectPersonne(){
    this.selectedPersonne.emit(this.personne);
  }

}
