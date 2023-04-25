import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../../model/iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      const id = +paraMap.get('id');
      console.log(id);
      this.word = this.dictionaryService.findById(id);
    });
  }

}
