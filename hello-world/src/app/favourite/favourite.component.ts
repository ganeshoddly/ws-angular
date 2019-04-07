import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.less']
})
export class FavouriteComponent implements OnInit {

  @Input() isFavourite:boolean; //adds property to <favourite [isFavourite] = ?></favourite>
                                //gets property from object from HOST component[ie APP COMP]

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
  }
}
