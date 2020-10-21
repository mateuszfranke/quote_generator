import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  author: string;
  subtitle: string;

  constructor() { }

  ngOnInit(): void {
    this.author = 'Steve Jobs';
    this.subtitle = 'business';
  }

}
