import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent} from '../app/search-results/search-results.component'
import { FavoritesComponent } from './favorites/favorites.component';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { ThemeCard2Component } from './theme-card2/theme-card2.component';
import { ThemeCard3Component } from './theme-card3/theme-card3.component';


const routes: Routes = [
  {path: "", component: SearchResultsComponent},
  { path: "favorites", component: FavoritesComponent},
  { path: "theGoodLife", component: ThemeCardComponent},
  { path: "healthBeyondTheHospital", component: ThemeCard2Component},
  { path: "robustFuture", component: ThemeCard3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [SearchResultsComponent, FavoritesComponent,ThemeCardComponent,ThemeCard2Component,ThemeCard3Component]