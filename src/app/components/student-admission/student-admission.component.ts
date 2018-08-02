import { Component } from '@angular/core';
@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.css']
})
export class StudentAdmissionComponent {
  model = {
    firstName: '',
    lastName: '',
    class: '',
    year: '',
    marks: ''
  }
  constructor() { }

}
