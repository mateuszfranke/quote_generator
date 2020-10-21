import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable, Output, Query} from '@angular/core';
import {map} from 'rxjs/operators';
import {QuoteModel} from '../model/Quote.model';
import {InRandomQuoteHttpModel} from '../model/InRandomQuoteHttp.model';

@Injectable()
export class QuoteGardenService {

  randomQuote: QuoteModel = new QuoteModel();
  randomQuoteEmiter = new EventEmitter<QuoteModel>();
  ulr: string;
  constructor(private http: HttpClient) {
    this.ulr = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
  }

  getRandomQoute(): void{
    this.http.get<InRandomQuoteHttpModel>(this.ulr)
      .pipe(
        map(responseData => {
          const quote: QuoteModel = new QuoteModel();
          quote.quoteText = responseData.quote.quoteText;
          quote.quoteAuthor = responseData.quote.quoteAuthor;
          quote.quoteGenre = responseData.quote.quoteGenre;
          return quote;
        }))
      .subscribe(responseData => {
        this.randomQuote = responseData;
      },error => {
        alert('Couldn\'t recive a quote');
      });
  }
}
