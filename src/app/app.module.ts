import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './filter.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StartupDetailsComponent } from './startup-details/startup-details.component';
import { ThemeCard2Component } from './theme-card2/theme-card2.component';
import { ThemeCard3Component } from './theme-card3/theme-card3.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavbarComponent,
    ThemeCardComponent,
    SearchBarComponent,
    StartupDetailsComponent,
    routingComponent,
    ThemeCard2Component,
    ThemeCard3Component,
   
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
