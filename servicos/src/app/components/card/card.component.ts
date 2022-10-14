import { PokemonData } from './../../models/pokemonData';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  pokemon: PokemonData = {
    id: 0,
    name: "",
    sprites: {
      front_default: ''
    },
    types: []
  }

  constructor(
    private _pokemon: PokemonService
    ) {
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(pokemonNmae: string){
    this._pokemon.getPokemon(pokemonNmae).subscribe({
      next: (res) => {
        this.pokemon ={
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
        console.log(this.pokemon.name);
      },
      error: (err) => console.log(this.pokemon.name)
    });
  }

}
