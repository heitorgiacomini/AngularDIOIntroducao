import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute) {
    this._activeRoute.params.subscribe(
      res => console.log(res)
    );
   }

  ngOnInit(): void {
  }

}
