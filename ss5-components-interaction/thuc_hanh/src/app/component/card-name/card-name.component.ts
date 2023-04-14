import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-name',
  templateUrl: './card-name.component.html',
  styleUrls: ['./card-name.component.css']
})
export class CardNameComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
