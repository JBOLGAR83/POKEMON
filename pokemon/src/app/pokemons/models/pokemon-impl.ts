import { Pokemon } from './pokemon';

export class PokemonImpl implements Pokemon {
  nombre: string;
  url: string;


  // tslint:disable-next-line: max-line-length
  constructor(nombre: any, url: any) {
    this.nombre = nombre;
    this.url = url;
  }

  getId(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
