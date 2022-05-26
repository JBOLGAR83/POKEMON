import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Pokemon } from '../models/pokemon';
import { PokemonsService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  todosPokemons: Pokemon[] = [];
  numPaginas: number = 0;


  constructor(
    private pokemonService: PokemonsService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response) => this.pokemons = this.pokemonService.extraerPokemons(response));
    this.getTodosPokemons();
  }
  getTodosPokemons(): void {
    this.pokemonService.getPokemons().subscribe (r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.pokemonService.getPokemonsPagina(index)
          .subscribe((response) => {
            this.todosPokemons.push(...this.pokemonService.extraerPokemons(response));
          });
      }
    });
  }

}
