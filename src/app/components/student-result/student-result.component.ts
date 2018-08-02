import { Component, OnInit } from '@angular/core';
import { StudentResult } from '../../models/student-result.model';
import { StudentResultService } from '../../services/student-result.service';
@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css'],
})
export class StudentResultComponent implements OnInit {
  tableData: any;
  constructor(private service: StudentResultService) { }

  ngOnInit() {


    this.getResults();
  }
  getResults(): void {
    this.service.getResults().subscribe((res: StudentResult[]) => {
      this.generateTableData(res);
    });

  }
  generateTableData(data): void {
    this.tableData = data.map(res => {
      let newArray = [];
      let sum = 0;
      let obj = {};
      obj['name'] = res.name;
      obj['rollnumber'] = res.rollNumber;
      Object.keys(res.marks).map((key) => {
        if ((res.marks['Maths'] || res.marks['English'] || res.marks['Science']) < 20) {
          obj['status'] = "Fail";
        } else {
          obj['status'] = "Pass";
        }
        sum += Number(res.marks[key]);
        obj['total'] = sum;
        obj['max'] = false;
      })
      return obj;
    })
    this.tableData.filter(data => {
      let highest = this.getMax(this.tableData,'total');
      if(data['total'] === highest['total']){
        return data['max'] = true;
      }else {
        return data['max'] = false;
      }
    })
    console.log(this.tableData);
  }
  getMax(arr, prop) {
    var max;
    for (var i=0 ; i<arr.length ; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max;
}
}
