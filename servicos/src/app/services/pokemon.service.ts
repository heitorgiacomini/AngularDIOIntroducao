import { PokemonData } from './../models/pokemonData';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl!: string;
  private pokeData!: PokemonData | any;

  constructor(private _http: HttpClient) {
    this.baseUrl = environment.pokeAPi;
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    return this._http.get<PokemonData>(`${this.baseUrl}${pokemonName}`);
  }
}
