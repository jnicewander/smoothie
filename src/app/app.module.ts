import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { StartupDetailsComponent } from './startup-details/startup-details.component';
import { ConcatPipe } from './concat.pipe';
import { MainViewComponent } from './main-view/main-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeCardComponent,
    SearchBarComponent,
    StartupDetailsComponent,
    SearchResultsComponent,
    FavoritesComponent,
    ResultsListComponent,
    ConcatPipe,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
