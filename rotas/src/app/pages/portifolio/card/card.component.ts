import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private _activeRoute: ActivatedRoute,
    private _navegador: Router
    ) {
    this._activeRoute.params.subscribe(
      res => console.log(res)
    );

    this._activeRoute.queryParams.subscribe(
      res => console.log(res)
    );

   }

  ngOnInit(): void {
    setInterval(()=>{
      this._navegador.navigate(['/'])
    }, 5000);
  }

}
