import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  DictionaryList: IWord[] = [
    {
      id: 1,
      word: 'hello',
      mean: 'xin chào'
    },
    {
      id: 2,
      word: 'goodbye',
      mean: 'tạm biệt'
    },
    {
      id: 3,
      word: 'thank you',
      mean: 'cảm ơn'
    }
  ];

  constructor() {
  }

  findAll(): IWord[] {
    return this.DictionaryList;
  }

  findById(id: number): IWord {
    return this.DictionaryList.filter(items => items.id === id)[0];
  }
}
