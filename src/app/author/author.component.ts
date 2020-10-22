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
  clicked: boolean;
  constructor(private quoteService: QuoteGardenService) {

  }
  ngOnInit(): void {

    this.quoteService.getRandomQuoteEmitter().subscribe(resp => {
      this.randomQuote.quoteAuthor = resp.quoteAuthor;
      this.randomQuote.quoteGenre = resp.quoteGenre;
      this.clicked = false;
    });
  }

  onGetAuthorQuotes(): void{
    this.clicked = true;
    this.quoteService.authors(this.randomQuote.quoteAuthor);
  }

}
