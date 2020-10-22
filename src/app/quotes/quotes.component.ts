import { Component, OnInit } from '@angular/core';
import {QuoteGardenService} from '../services/quote-garden.service';
import {QuoteModel} from '../model/Quote.model';

@Component({
  selector: 'app-qoutes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  // singleQuote: QuoteModel;
  authorQuotes: QuoteModel[];
  constructor(private quoteService: QuoteGardenService) { }

  ngOnInit(): void {
    this.quoteService.refresh();

    this.quoteService.getRandomQuoteEmitter().subscribe(resp => {
      this.authorQuotes = [];
      this.authorQuotes.push(resp);
    });

    this.quoteService.getAuthorQuotesSubject().subscribe(resp => {
      console.log(resp);
      this.authorQuotes = resp;
    });
  }


}
