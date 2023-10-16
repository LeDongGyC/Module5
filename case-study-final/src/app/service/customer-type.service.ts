import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [
    {
      id: 1,
      name: 'Diamond'
    },
    {
      id: 2,
      name: 'Platinum'
    },
    {
      id: 3,
      name: 'Gold'
    },
    {
      id: 4,
      name: 'Silver'
    },
    {
      id: 5,
      name: 'Member'
    },
  ];

  constructor() {
  }

  findAll(): CustomerType[] {
    return this.customerTypeList;
  }

  findById(id: number): CustomerType {
    return this.customerTypeList.filter(items => items.id === id)[0];
  }
}
