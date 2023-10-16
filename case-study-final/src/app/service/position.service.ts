import {Injectable} from '@angular/core';
import {Position} from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  positionList: Position[] = [
    {
      id: 1,
      name: 'Lễ Tân'
    },
    {
      id: 2,
      name: 'Phục vụ'
    },
    {
      id: 3,
      name: 'Chuyên viên'
    },
    {
      id: 4,
      name: 'Giám sát'
    },
    {
      id: 5,
      name: 'Quán lý'
    },
    {
      id: 6,
      name: 'Giám đốc'
    }
  ];

  constructor() {
  }

  findAll(): Position[] {
    return this.positionList;
  }

  findById(id: number): Position {
    return this.positionList.filter(items => items.id === id)[0];
  }
}
