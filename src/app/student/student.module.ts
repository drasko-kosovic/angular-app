import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StudentDeleteDialogComponent} from './student-delete-dialog.component';
import {NgJhipsterModule} from 'ng-jhipster';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {StudentUpdateComponent} from './student-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentDetailComponent} from './student-detail.component';
import {StudentComponent} from './student.component';


@NgModule({
  declarations: [StudentDeleteDialogComponent, StudentUpdateComponent, StudentDetailComponent, StudentComponent],
  exports: [
    StudentComponent
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
