import {Injectable} from '@angular/core';
import {EducationDegree} from '../model/education-degree';

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {
  educationDegreeList: EducationDegree[] = [
    {
      id: 1,
      name: 'Trung cấp'
    },
    {
      id: 2,
      name: 'Cao đẳng'
    },
    {
      id: 3,
      name: 'Đại học'
    },
    {
      id: 4,
      name: 'Sau đại học'
    }
  ];

  constructor() {
  }

  findAll(): EducationDegree[] {
    return this.educationDegreeList;
  }

  findById(id: number): EducationDegree {
    return this.educationDegreeList.filter(items => items.id === id)[0];
  }
}
