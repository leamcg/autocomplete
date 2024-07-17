export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface CocktailsResponse {
    drinks: Cocktail[];
}