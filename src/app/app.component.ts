import {Component, SimpleChanges} from '@angular/core';
import {QuoteGardenService} from './services/quote-garden.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quote-generator';
  author: string;
  constructor(private quoteService: QuoteGardenService) {
    this.quoteService.getRandomQoute();
    this.quoteService.randomQuoteEmiter.emit(this.quoteService.randomQuote);

  }


}
