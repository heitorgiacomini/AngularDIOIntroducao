import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './courses-info.component.html',
})
export class CourseInfoComponent implements OnInit {
  courseId!: number;
  course!: Course;

  constructor(private _route: ActivatedRoute,
    private _courseService: CourseService
  ) {
    let num = this._route.snapshot.params['id'];
    this._courseService.retrieveById(+num).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  ngOnInit(): void {
    this.courseId = this._route.snapshot.params['id'];
    // this.courseId = this._route.snapshot.paramMap.get('id');
  }

  save(): void {
    this._courseService.save(this.course).subscribe({
      next: course => console.log('Saved with success', course),
      error: err => console.log('Error', err)
    });
  }
}
