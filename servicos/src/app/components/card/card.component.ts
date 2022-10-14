import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  name: string | null = "Bulbassauro";
  attributesTypes: string[] = ['FIRE', 'ROCK']
  constructor(
    private _pokemon: PokemonService
  ) { }

  ngOnInit(): void {
    this._pokemon.getPokemon("pikachu");
  }

}
