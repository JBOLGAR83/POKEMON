import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';
import { PokemonImpl } from '../models/pokemon-impl';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}pokemon`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getPokemons(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerPokemons(respuestaApi: any): Pokemon[] {
    const pokemons: Pokemon[] = [];
    respuestaApi.results.forEach((p: any) => {
      pokemons.push(this.mapearPokemon(p));

    });
    return pokemons;
  }

  mapearPokemon(pokemonApi: any): PokemonImpl {
    return new PokemonImpl(
      pokemonApi.name,
      pokemonApi.url
    )

  }

  create(pokemon: Pokemon): void {
    console.log(`Se ha creado el pokemon: ${JSON.stringify(pokemon)}`);
  }

  getPokemonsPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
