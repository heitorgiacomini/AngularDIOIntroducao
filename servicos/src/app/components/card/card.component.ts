import { PokemonData } from './../../models/pokemonData';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  pokemon!: PokemonData;
  constructor(
    private _pokemon: PokemonService
  ) { }

  ngOnInit(): void {
    this._pokemon.getPokemon("charizard").subscribe({
      next: (res) => {
        console.log(res);
        this.pokemon ={
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      }
    });
  }

}
