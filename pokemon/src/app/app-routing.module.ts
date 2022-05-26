import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';


  const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'pokemons',
      loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule)
    },
  {
    path: "not-found" , component: NotFoundComponent
  },
  {
    path: "**" , //cualquier valor que no este indicado
    redirectTo: "not-found"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
