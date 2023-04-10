import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  operator: string;
  color: string;
  constructor() { }

  ngOnInit(): void {
  }

  // sum(firstNumber: string, secondNumber: string) {
  //   this.result = +firstNumber + +secondNumber;
  // }

  // minus(firstNumber: string, secondNumber: string) {
  //   this.result = +firstNumber - +secondNumber;
  // }
  //
  // multiplication(firstNumber: string, secondNumber: string) {
  //   this.result = +firstNumber * +secondNumber;
  // }
  //
  // division(firstNumber: string, secondNumber: string) {
  //   this.result = +firstNumber / +secondNumber;
  // }
  sum(firstNumber: string, secondNumber: string) {
    switch (this.operator) {
      case '+':
        this.result = +firstNumber + +secondNumber;
        break;
      case '-':
        this.result = +firstNumber - +secondNumber;
        break;
      case '*':
        this.result = +firstNumber * +secondNumber;
        break;
      case '/':
        this.result = +firstNumber / +secondNumber;
        break;
    }
  }
}
