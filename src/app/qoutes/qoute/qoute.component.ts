import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.scss']
})
export class QouteComponent implements OnInit {

  qoute: string;

  constructor() { }

  ngOnInit(): void {
    this.qoute = 'Nulla facilisi. Integer consectetur sapien sagittis ligula lobortis, at pulvinar elit aliquet. Fusce at justo ac ante posuere pretium. Phasellus et vulputate dui. Fusce dolor arcu, luctus vel molestie quis, placerat vitae eros. Ut dignissim nibh sit amet leo varius euismod. Aenean luctus tortor at nibh tempus, suscipit pellentesque nisl mollis. Vestibulum id diam risus. Nam sit amet ipsum quis sapien sagittis facilisis. Nulla pharetra congue augue non aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus consectetur, odio vel aliquam scelerisque, dui tortor interdum purus, sed malesuada lectus dui vel urna. ';
  }

}
