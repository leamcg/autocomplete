import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cocktail, CocktailsResponse } from '../models/cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  constructor(private http: HttpClient) {}

  searchCocktails(query: string): Observable<Cocktail[]> {
    return this.http
      .get<CocktailsResponse>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      )
      .pipe(map((response) => response.drinks));
  }
}
