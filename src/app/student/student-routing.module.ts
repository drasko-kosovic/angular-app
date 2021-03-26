import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes} from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import {EMPTY, never, Observable, of} from "rxjs";
import {IStudent, Student} from "../shared/model/student.model";
import {StudentService} from "./student.service";
import {flatMap} from "rxjs/internal/operators";
import {HttpResponse} from "@angular/common/http";
import {StudentUpdateComponent} from "./student-update.component";

@Injectable({ providedIn: 'root' })
export class StudentResolve implements Resolve<IStudent> {
  constructor(private service: StudentService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IStudent> | Observable<never> {
    const id = route.params['id'];
    if (id) {

      return this.service.find(id).pipe(
        flatMap((student: HttpResponse<Student>) => {
          if (student.body) {
            return of(student.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Student());
  }
}
const routes: Routes = [
  {
    path:'',
    component:StudentListComponent
  },
  {
    path: 'new',
    component: StudentUpdateComponent,
    resolve: {
      student: StudentResolve,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
