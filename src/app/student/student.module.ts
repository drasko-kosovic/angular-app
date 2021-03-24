import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent],
  exports: [
    StudentListComponent,StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ]
})
export class StudentModule {
}
