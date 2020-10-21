import {HttpClient} from '@angular/common/http';

export class QouteGardenService {
  constructor(private http: HttpClient) {
  }
  Log(): void {
    console.log('hello from qoute-garden.service');
  }
  getRandomQoute(){

  }
}
