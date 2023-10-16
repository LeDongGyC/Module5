import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service/employee.service';
import {EducationDegreeService} from '../../../service/education-degree.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Division} from '../../../model/division';
import {EducationDegree} from '../../../model/education-degree';
import {DivisionService} from '../../../service/division.service';
import {PositionService} from '../../../service/position.service';
import {Position} from '../../../model/position';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  rfCreate: FormGroup;
  divisionList: Division[];
  positionList: Position[];
  eduList: EducationDegree[];

  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationDegreeService: EducationDegreeService,
              private positionService: PositionService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.divisionList = this.divisionService.findAll();
    this.eduList = this.educationDegreeService.findAll();
    this.positionList = this.positionService.findAll();
    this.rfCreate = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required],
      educationDegree: ['', Validators.required],
      division: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      idCard: ['', Validators.required],
      salary: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  save() {
    const employee = this.rfCreate.value;
    this.employeeService.save(employee).subscribe(next => {
      console.log(next);
      this.router.navigateByUrl('employee');
    });
  }
}
