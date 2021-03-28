import { Injectable } from '@angular/core';
import {SERVER_API_URL} from '../../app.constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStudent} from '../../shared/model/student.model';
import {createRequestOption} from '../../shared/util/request-util';

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
  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  create(student: IStudent): Observable<EntityResponseType> {
    return this.http.post<IStudent>(this.resourceUrl, student, { observe: 'response' });
  }
  update(student: IStudent): Observable<EntityResponseType> {
    return this.http.put<IStudent>(this.resourceUrl, student, { observe: 'response' });
  }
  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IStudent>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
