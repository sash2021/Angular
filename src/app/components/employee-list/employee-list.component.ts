import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

public employees: IEmployee[];
public errorMsg;

  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this._empService.getEmployees()
    .subscribe(data => { this.employees = data; },
               error => this.errorMsg = error );
  }

}
