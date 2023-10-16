import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service/employee.service';
import {Employee} from '../../../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  deleteId: number;
  deteteName: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.employeeService.findAll().subscribe(next => {
      this.employees = next;
    });
  }

  showDelete(employee: Employee) {
    this.deleteId = employee.id;
    this.deteteName = employee.name;
  }

  delete(id: number) {
    this.employeeService.delete(id).subscribe(next => {
      console.log(next);
      this.getAll();
    });
  }
}
