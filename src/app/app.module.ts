import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { MenuComponent } from './menu/menu.component';
import { AuthorComponent } from './author/author.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteGardenService } from './services/quote-garden.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    MenuComponent,
    AuthorComponent,
    QuotesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuoteGardenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
