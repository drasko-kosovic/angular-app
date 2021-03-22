import { Injectable } from '@angular/core';
import {SERVER_API_URL} from "../app.constants";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStudent} from "../shared/model/student.model";
import {createRequestOption} from "../shared/util/request-util";
type EntityResponseType = HttpResponse<IStudent>;
type EntityArrayResponseType = HttpResponse<IStudent[]>;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public resourceUrl = SERVER_API_URL + 'api/students';

  constructor(protected http: HttpClient) { }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IStudent[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
}
