export class QuoteGardenService {
  ulr: string;
  constructor() {
    this.ulr = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
  }
  Log(): void {
    console.log('hello from quote-garden.service');
  }
  getRandomQoute(): void{
  }
}
