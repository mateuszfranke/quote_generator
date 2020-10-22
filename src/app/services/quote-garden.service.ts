import {HttpClient} from '@angular/common/http';
import {Injectable, Output, Query} from '@angular/core';
import {map} from 'rxjs/operators';
import {QuoteModel} from '../model/Quote.model';
import {InRandomQuoteHttpModel} from '../model/InRandomQuoteHttp.model';
import {Observable, Subject} from 'rxjs';
import {InAuthorQuotesHttpModel} from '../model/InAuthorQuoestsHttp.model';

@Injectable()
export class QuoteGardenService {

  randomQuoteEmiter: Subject<QuoteModel> = new Subject<QuoteModel>();
  authorQuotesSubject: Subject<QuoteModel[]> = new Subject<QuoteModel[]>();

  ulr: string;
  urlAuthorQuotes: string;
  constructor(private http: HttpClient) {
    this.ulr = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
  }

  refresh(): void{
    this.getRandomQoute().subscribe(observer => {this.randomQuoteEmiter.next(observer); });
  }
  authors(author: string): void{
    this.getAuthorQuotes(author).subscribe(observer => {this.authorQuotesSubject.next(observer); });
  }
  getRandomQuoteEmitter(): Observable<QuoteModel> {
    return this.randomQuoteEmiter.asObservable();
  }
  getAuthorQuotesSubject(author: string): Observable<QuoteModel[]> {
    return this.authorQuotesSubject.asObservable();
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

  getAuthorQuotes(author: string): Observable<QuoteModel[]>{
    const url = `https://quote-garden.herokuapp.com/api/v2/authors/${author}?page=1&limit=10`;
    return this.http.get<InAuthorQuotesHttpModel>(url)
     .pipe(
       map(resp => {
         const quotes: QuoteModel[] = [];
         for (let i = 0; i < resp.quotes.length; i++)
          {
            quotes.push(resp.quotes[i]);
          }
         return quotes;
   }));
  }
}
