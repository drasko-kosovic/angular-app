import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StudentDeleteDialogComponent} from "./student-delete-dialog.component";
import {NgJhipsterModule} from "ng-jhipster";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {StudentUpdateComponent} from "./student-update.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent,StudentDeleteDialogComponent,StudentUpdateComponent],
  exports: [
    StudentListComponent,StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgJhipsterModule,
    NgbPaginationModule,
    ReactiveFormsModule
  ]
})
export class StudentModule {
}
