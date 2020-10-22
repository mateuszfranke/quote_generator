import {HttpClient} from '@angular/common/http';
import {Injectable, Output, Query} from '@angular/core';
import {map} from 'rxjs/operators';
import {QuoteModel} from '../model/Quote.model';
import {InRandomQuoteHttpModel} from '../model/InRandomQuoteHttp.model';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class QuoteGardenService {

  randomQuoteEmiter: Subject<QuoteModel> = new Subject<QuoteModel>();
  ulr: string;

  constructor(private http: HttpClient) {
    this.ulr = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
  }

  refresh(): void{
    this.getRandomQoute().subscribe(observer => {this.randomQuoteEmiter.next(observer); });
  }

  getRandomQuoteEmitter(): Observable<QuoteModel> {
    return this.randomQuoteEmiter.asObservable();
  }

  getRandomQoute(): Observable<QuoteModel>{
   return this.http.get<InRandomQuoteHttpModel>(this.ulr)
      .pipe(
        map(responseData => {
          const quote: QuoteModel = new QuoteModel();
          quote.quoteText = responseData.quote.quoteText;
          quote.quoteAuthor = responseData.quote.quoteAuthor;
          quote.quoteGenre = responseData.quote.quoteGenre;
          return quote;
        }));
  }
}
