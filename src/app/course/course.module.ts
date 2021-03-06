import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CourseService } from './services/course.service';
import { CourseEffects } from './store/course.effects';
import { courseReducer } from './store/course.reducers';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CreateCourseComponent } from './component/create-course/create-course.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  providers: [CourseService],
  bootstrap: [],
  exports: [
    CoursesListComponent, 
    CreateCourseComponent
  ]
})
export class CourseModule { }
