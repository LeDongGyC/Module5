import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  rfEdit: FormGroup;
  customerEdit: Customer;
  customerTypeList: CustomerType[];
  id: number;
  cusType: CustomerType;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.findAll();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(next2 => {
        this.customerEdit = next2;
        this.rfEdit = this.fb.group({
          id: [this.customerEdit.id, Validators.required],
          customerType: [this.customerEdit.customerType.name, Validators.required],
          name: [this.customerEdit.name, Validators.required],
          dateOfBirth: [this.customerEdit.dateOfBirth, Validators.required],
          idCard: [this.customerEdit.idCard, Validators.required],
          phoneNumber: [this.customerEdit.phoneNumber, Validators.required],
          email: [this.customerEdit.email, Validators.required],
          address: [this.customerEdit.address, Validators.required]
        });
      });
    });
  }

  edit(id: number) {
    const customer = this.rfEdit.value;
    console.log(customer.id);
    this.cusType = this.customerTypeService.findById(+customer.customerType);
    customer.customerType = {
      id: this.cusType.id,
      name: this.cusType.name
    };
    console.log(this.cusType);
    this.customerService.update(id, customer).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/customer');
      }
    )
    ;
  }
}
