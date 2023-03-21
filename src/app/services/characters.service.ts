import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { PokemonDetails } from '../Models/pokemon-details.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private API_CHARACTERS = "https://pokeapi.co/api/v2/"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*/*'
    })
  }

  constructor(private http: HttpClient) { }

  getCharacterByName(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.API_CHARACTERS}pokemon/${name}`, this.httpOptions).pipe(
      map((data: any) => data), retry(1)
    )
  }

}
