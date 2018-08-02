import { Component } from '@angular/core';
import { StudentResultComponent } from '../student-result/student-result.component';
import { StudentAdmissionComponent } from '../student-admission/student-admission.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentInfo';
}
