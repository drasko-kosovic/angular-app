import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IStudent} from '../../shared/model/student.model';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
})
export class StudentDetailComponent implements OnInit {
  student: IStudent | null = null;
  id:string;

  constructor(protected activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>console.log(params));
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ student }) => (this.student = student))
    this.activatedRoute.data.subscribe(({ student }) => (this.id = student));
  }

  previousState(): void {
    window.history.back();
  }
}
