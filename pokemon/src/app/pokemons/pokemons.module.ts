import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';


@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonItemComponent,
    
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class PokemonsModule { }
