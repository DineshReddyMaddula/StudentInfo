import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import { StudentResultService } from '../services/student-result.service'
import { StudentResult } from '../models/student-result.model';
@Injectable()
export class StudentResultResolverService implements Resolve<Observable<StudentResult[]>> {

  constructor(private service: StudentResultService) { }
  resolve() {
    return this.service.getResults().map(res => res);
  }
}
