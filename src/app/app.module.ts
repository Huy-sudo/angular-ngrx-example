import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './course/component/courses-list/courses-list.component';
import { CreateCourseComponent } from './course/component/create-course/create-course.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './course/course.module';
import { CourseResolver } from './course/course.resolver';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

const routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    resolve: {
      courses: CourseResolver
    }
  },
  {path: 'create-course', component: CreateCourseComponent},
  {path: '**', redirectTo: 'courses'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [CourseResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }