import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from '../../../model/customer';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  deleteId: number;
  deleteName: string;
  searchForm: FormGroup;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAll();
    this.searchForm = this.fb.group({
      searchName: [''],
      dateStart: [''],
      dateEnd: ['']
    });
  }

  getAll() {
    this.customerService.findAll().subscribe(next => {
      this.customers = next;
    });
  }

  showDelete(customer: Customer) {
    this.deleteId = customer.id;
    this.deleteName = customer.name;
  }

  delete(idDelete: number) {
    this.customerService.delete(+idDelete).subscribe(next => {
      console.log(next);
      this.customerService.findAll().subscribe(data => {
        this.customers = data;
        console.log(this.customers);
      });
    });
  }

  search() {
    const searchName = this.searchForm.controls.searchName.value;
    const dateStart = this.searchForm.controls.dateStart.value;
    const dateEnd = this.searchForm.controls.dateEnd.value;
    this.customerService.search(searchName, dateStart, dateEnd).subscribe(next => {
      this.customers = next;
      console.log(next);
    });
  }
}
