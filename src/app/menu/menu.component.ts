import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuoteGardenService} from '../services/quote-garden.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [QuoteGardenService]
})
export class MenuComponent implements OnInit {

  constructor(private qouteGardenService: QuoteGardenService) {

  }

  ngOnInit(): void {
    this.qouteGardenService.Log();
    // let url = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
    // let random = this.http.get(url);
    // console.log(random);
  }



}
