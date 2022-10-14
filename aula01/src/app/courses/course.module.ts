import { StarModule } from './../shared/components/star/star.module';
import { AppComponent } from './../app.component';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from './courses-info.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../shared/components/star/star.component';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    AppPipeModule,
    CommonModule,
    StarModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent },
    ])
  ],
})
export class CourseModule{

}
