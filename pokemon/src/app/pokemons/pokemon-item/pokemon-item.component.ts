import { Component, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonImpl } from '../models/pokemon-impl';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: Pokemon = new PokemonImpl("","");


  constructor() { }

  ngOnInit(): void {
  }

}
