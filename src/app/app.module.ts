import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoutes/qoute/qoute.component';
import { MenuComponent } from './menu/menu.component';
import { AuthorComponent } from './author/author.component';
import { QoutesComponent } from './qoutes/qoutes.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    MenuComponent,
    AuthorComponent,
    QoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
