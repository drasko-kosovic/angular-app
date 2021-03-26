import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StudentDeleteDialogComponent} from "./student-delete-dialog.component";


@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent,StudentDeleteDialogComponent],
  exports: [
    StudentListComponent,StudentDetailComponent
  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        HttpClientModule,
        FontAwesomeModule
    ]
})
export class StudentModule {
}
