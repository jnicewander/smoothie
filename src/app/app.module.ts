import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavbarComponent,
    ThemeCardComponent,
    SearchResultsComponent,
    FavoriteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
