import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Division} from '../../../model/division';
import {Position} from '../../../model/position';
import {EducationDegree} from '../../../model/education-degree';
import {EmployeeService} from '../../../service/employee.service';
import {DivisionService} from '../../../service/division.service';
import {EducationDegreeService} from '../../../service/education-degree.service';
import {PositionService} from '../../../service/position.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Employee} from '../../../model/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  rfEdit: FormGroup;
  employeeEdit: Employee;
  divisionList: Division[];
  positionList: Position[];
  eduList: EducationDegree[];
  id: number;
  div: Division;
  pos: Position;
  edu: EducationDegree;

  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationDegreeService: EducationDegreeService,
              private positionService: PositionService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.divisionList = this.divisionService.findAll();
    this.eduList = this.educationDegreeService.findAll();
    this.positionList = this.positionService.findAll();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.employeeService.findById(this.id).subscribe(next2 => {
        this.employeeEdit = next2;
        this.rfEdit = this.fb.group({
          id: [this.employeeEdit.id, Validators.required],
          name: [this.employeeEdit.name, Validators.required],
          position: [this.employeeEdit.position.name, Validators.required],
          educationDegree: [this.employeeEdit.position.name, Validators.required],
          division: [this.employeeEdit.position.name, Validators.required],
          dateOfBirth: [this.employeeEdit.dateOfBirth, Validators.required],
          idCard: [this.employeeEdit.idCard, Validators.required],
          salary: [this.employeeEdit.salary, Validators.required],
          phoneNumber: [this.employeeEdit.phoneNumber, Validators.required],
          email: [this.employeeEdit.email, Validators.required],
          address: [this.employeeEdit.address, Validators.required]
        });
      });
    });
  }

  edit(id: number) {
    const employee = this.rfEdit.value;
    this.pos = this.positionService.findById(+employee.position);
    this.div = this.divisionService.findById(+employee.division);
    this.edu = this.educationDegreeService.findById(+employee.educationDegree);
    employee.position = {
      id: this.pos.id,
      name: this.pos.name
    };
    employee.division = {
      id: this.div.id,
      name: this.div.name
    };
    employee.educationDegree = {
      id: this.edu.id,
      name: this.edu.name
    };
    console.log(this.edu);
    this.employeeService.update(id, employee).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/employee');
      }
    )
    ;
  }
}
