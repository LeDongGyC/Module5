import {Injectable} from '@angular/core';
import {Division} from '../model/division';
import {EducationDegree} from '../model/education-degree';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  divisionList: Division[] = [
    {
      id: 1,
      name: 'Sale-Marketing'
    },
    {
      id: 2,
      name: 'Hành chính'
    },
    {
      id: 3,
      name: 'Phục vụ'
    },
    {
      id: 4,
      name: 'Quản lí'
    }
  ];

  constructor() {
  }

  findAll(): Division[] {
    return this.divisionList;
  }

  findById(id: number): Division {
    return this.divisionList.filter(items => items.id === id)[0];
  }
}
