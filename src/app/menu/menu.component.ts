import { Component, OnInit } from '@angular/core';
import {QuoteGardenService} from '../services/quote-garden.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: []
})
export class MenuComponent implements OnInit {

  constructor(private quoteGardenService: QuoteGardenService) {
  }

  ngOnInit(): void {

  }

  onGetRandomQuote(): void{
    this.quoteGardenService.getRandomQoute();
    this.quoteGardenService.randomQuoteEmiter.next(this.quoteGardenService.randomQuote);
  }
}
