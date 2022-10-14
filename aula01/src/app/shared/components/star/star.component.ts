import { ChangeDetectionStrategy, Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarComponent implements OnChanges{
  @Input()
  rating: number = 0;
  @Input()
  starWidth: number = 0;

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}
