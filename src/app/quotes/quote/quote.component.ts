import {Component, Input, OnInit} from '@angular/core';
import {QuoteGardenService} from '../../services/quote-garden.service';
import {QuoteModel} from '../../model/Quote.model';


@Component({
  selector: 'app-qoute',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() quote: string;


  constructor(private quoteService: QuoteGardenService) {
  }

  ngOnInit() {
    // this.quote='123';
  }

  // ngOnChanges(): void {
  //  // console.log(this.quote);
  // }

}
