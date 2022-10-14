import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Course } from './course';
import { CourseService } from './course.service';

// selector: 'app-course-list',
@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filterBy!: string;
  filteredCourses: Course[] = [];


  constructor(private _courseService: CourseService) {
  }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this._courseService.retrieveAll().subscribe({
      next: courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: err => console.log('Error', err)

    });

    // this._courseService.retrieveAll().pipe(
    //   tap((res: any) => (this.courses = res)),
    //   map((res) => res.results)
    // );
  }


  set filter(value: string) {
    this.filterBy = value;
    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(): string {
    return this.filterBy;
  }

}
