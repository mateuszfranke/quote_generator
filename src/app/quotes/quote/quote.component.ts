import {Component, Input, OnInit} from '@angular/core';
import {QuoteGardenService} from '../../services/quote-garden.service';


@Component({
  selector: 'app-qoute',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() qoute: string;

  constructor(private quoteService: QuoteGardenService) {
  }

  ngOnInit() {

  }

}
