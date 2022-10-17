import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = "";//assets/bt-5.jpg
  @Input()
  gameLabel: string = "";
  @Input()
  gameType: string = "";
  @Input()
  gamePrice: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
