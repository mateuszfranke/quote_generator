import { Component, OnInit } from '@angular/core';
import {QuoteGardenService} from '../services/quote-garden.service';

@Component({
  selector: 'app-qoutes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  singleQuote: string;

  constructor(private quoteService: QuoteGardenService) { }

  ngOnInit(): void {
    this.quoteService.refresh();
    this.quoteService.getRandomQuoteEmitter().subscribe(resp => {
      this.singleQuote = resp.quoteText;
    });

    this.quoteService.getAuthorQuotesSubject().subscribe(resp => {
      console.log(resp);
    });
  }


}
