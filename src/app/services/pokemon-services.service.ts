import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment}from 'src/environments/environment'
import {PokemonData}from '../model/pokemonDta'

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  //variavel vazia
 private baseURL:string =""
 private pokeDat: PokemonData |any
  constructor(
    private http:HttpClient) {
      //variaveçl recebendo a api
    this.baseURL = environment.pokeApi
   }
  //função pegando os dados do get e pegando a requisição
  getPokemon(pokemonName:string):Observable<PokemonData>{
  this.pokeDat = this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
  return this.pokeDat
  }
}
