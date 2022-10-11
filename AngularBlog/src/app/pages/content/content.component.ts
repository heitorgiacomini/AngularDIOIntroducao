import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover!: string;
  @Input()
  Title!: string;
  @Input()
  Description!: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    );
  }

}
