import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent} from '../app/search-results/search-results.component'
import { FavoritesComponent } from './favorites/favorites.component';
import { ThemeCardComponent } from './theme-card/theme-card.component';


const routes: Routes = [
  {path: "", component: SearchResultsComponent},
  { path: "favorites", component: FavoritesComponent},
  { path: "theGoodLife", component: ThemeCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [SearchResultsComponent, FavoritesComponent,ThemeCardComponent]