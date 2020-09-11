import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesService } from '../app/services/favorites.service'
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: "favorites", component: FavoritesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
