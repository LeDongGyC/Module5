import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customer-type';
import {CustomerTypeService} from '../../../service/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  rfCreate: FormGroup;
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.findAll();
    this.rfCreate = this.fb.group({
      id: ['', [Validators.required]],
      customerType: ['', [Validators.required]],
      name: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required],
      idCard: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  save() {
    const customer = this.rfCreate.value;
    this.customerService.save(customer).subscribe((next) => {
      console.log(next);
      this.router.navigateByUrl('customer');
    });
  }
}
