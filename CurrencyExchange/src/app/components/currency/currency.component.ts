import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currencies: string[] = ['TRY', 'USD', 'EUR', 'GBP'];
  inputCurrency: string = 'TRY';
  outputCurrency: string = 'USD';
  inputNumber: number = 0;
  currencyRate: any = {
    TRY: 1,
    USD: 0.074,
    EUR: 0.065,
    GBP: 0.055,
  };
  constructor() {}

  ngOnInit(): void {}

  calcResult(
    inputNumber: number,
    inputCurrency: string,
    outputCurrency: string
  ): number {
    return (
      (inputNumber / (this.currencyRate[inputCurrency]) *
      this.currencyRate[outputCurrency])
    );
  }

  result(): number {
    return this.calcResult(
      this.inputNumber,
      this.inputCurrency,
      this.outputCurrency
    );
  }
}
