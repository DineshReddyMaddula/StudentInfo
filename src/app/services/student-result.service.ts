import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { StudentResult } from '../models/student-result.model';
@Injectable()
export class StudentResultService {

  constructor(private http: HttpClient) { }
  getResults(): Observable<StudentResult[]> {
    return this.http.get<StudentResult[]>("http://www.mocky.io/v2/5b6098612f00001739461a17").map((res => res));
  }
}
