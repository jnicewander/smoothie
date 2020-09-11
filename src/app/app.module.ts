import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './filter.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavbarComponent,
    ThemeCardComponent,
    SearchBarComponent,
    FavoritesComponent,
    SearchResultsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
