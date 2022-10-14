import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl!:string;
  constructor() {
    this.baseUrl = environment.pokeAPi;
  }

  getPokemon(pokemonName: string){

  }
}
