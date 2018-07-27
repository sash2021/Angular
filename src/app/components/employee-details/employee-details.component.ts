import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees: IEmployee[];
  public errorMsg;

  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this._empService.getEmployees()
    .subscribe(data => { this.employees = data; },
               error => this.errorMsg = error );
  }

}
