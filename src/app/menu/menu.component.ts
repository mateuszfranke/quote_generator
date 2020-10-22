import { Component, OnInit } from '@angular/core';
import {QuoteGardenService} from '../services/quote-garden.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: []
})
export class MenuComponent implements OnInit {

  authorName: string;

  constructor(private quoteGardenService: QuoteGardenService) {
  }

  ngOnInit(): void {
    this.quoteGardenService.getAuthorQuotesSubject().subscribe(observer => {
      this.authorName = observer[0].quoteAuthor;
    });

  }

  onGetRandomQuote(): void{
    this.quoteGardenService.refresh();
  }
}
