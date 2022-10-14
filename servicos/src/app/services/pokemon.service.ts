import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl!:string;
  private pokeData!:any;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.pokeAPi;
  }

  getPokemon(pokemonName: string){
   this.pokeData = this._http.get(`${this.baseUrl}${pokemonName}`);
  }
}
