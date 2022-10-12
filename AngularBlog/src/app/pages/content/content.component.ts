import { dataFake } from './../../data/dataFake';
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
  private id!:string | null;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(value =>{
      this.id =  value.get("id");
      this.setValuesToComponent(this.id!)
    }
    );
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    if(result){
      this.photoCover = result.photo;
      this.Title = result.title;
      this.Description = result.description;
    }
  }
}
