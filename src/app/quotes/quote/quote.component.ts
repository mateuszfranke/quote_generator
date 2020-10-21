import { Component, OnInit } from '@angular/core';
import {QuoteGardenService} from '../../services/quote-garden.service';
import {QuoteModel} from '../../model/Quote.model';

@Component({
  selector: 'app-qoute',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  qoute: string;

  constructor(private quoteService: QuoteGardenService) {
    this.quoteService.randomQuoteEmiter.subscribe((resp: QuoteModel) => {
      this.qoute = resp.quoteText;
    });
  }


  ngOnInit(): void {
  }

}
