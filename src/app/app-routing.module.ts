import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ResultsListComponent } from './results-list/results-list.component';

const routes: Routes = [
  { path: 'results', component: ResultsListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', component: MainViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
