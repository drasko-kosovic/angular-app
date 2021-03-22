import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {IStudent} from "../../shared/model/student.model";
import {ITEMS_PER_PAGE} from "../../shared/constants/pagination.constants";
import {log} from "util";
import {Router} from "@angular/router";


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students?: IStudent[];
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;

  predicate!: string;
  ascending!: boolean;
  ngbPaginationPage = 1;

  constructor(protected studentService: StudentService,
              protected router: Router) {
  }

  ngOnInit(): void {
    this.loadPage();
  }

  // loadPage1(): void {
  //   this.studentService.query()
  //     .subscribe(
  //       (res) => this.students = res)
  //
  // }

  loadPage(page?: number, dontNavigate?: boolean): void {
    const pageToLoad: number = page || this.page || 1;

    this.studentService
      .query({
        page: pageToLoad - 1,
        size: this.itemsPerPage,

      })
      .subscribe(
        (res: HttpResponse<IStudent[]>) => this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate)

      );
  }

  protected onSuccess(data: IStudent[] | null, headers: HttpHeaders, page: number, navigate: boolean): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    if (navigate) {
      this.router.navigate(['/'], {
        queryParams: {
          page: this.page,
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc'),
        },
      });
    }
    this.students = data || [];
    console.log(data);
    this.ngbPaginationPage = this.page;
  }

  protected onError(): void {
    this.ngbPaginationPage = this.page ?? 1;
  }
}
