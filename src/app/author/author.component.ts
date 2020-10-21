import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {QuoteGardenService} from '../services/quote-garden.service';
import {QuoteModel} from '../model/Quote.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  randomQuote: QuoteModel = new QuoteModel();

  constructor(private quoteService: QuoteGardenService) {
    this.quoteService.randomQuoteEmiter.subscribe((res: QuoteModel) => {
     this.randomQuote = res;
    });
  }

  ngOnInit(): void {
    this.randomQuote.quoteAuthor = '';
    this.randomQuote.quoteGenre = '';

  }

}
