import { Component } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../models/cocktail';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../../pipes/highlight.pipe';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [FormsModule, HighlightPipe],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent {
  query: string = '';
  options: Cocktail[] = [];
  highlightedIndex = 0;
  onFocus = false;

  constructor(private cocktailsService: CocktailsService) {}

  selectOption(option: Cocktail): void {
    window.location.href = option.strDrinkThumb;
  }

  onKeydown(event: KeyboardEvent) {
    const { key } = event;

    if (key === 'ArrowDown') {
      this.highlightedIndex = (this.highlightedIndex + 1) % this.options.length;
      event.preventDefault();
    } else if (key === 'ArrowUp') {
      this.highlightedIndex =
        (this.highlightedIndex - 1 + this.options.length) % this.options.length;
      event.preventDefault();
    } else if (key === 'Enter') {
      this.selectOption(this.options[this.highlightedIndex]);
      event.preventDefault();
    }
  }

  onInput(): void {
    this.highlightedIndex = 0;
    if (this.query) {
      this.cocktailsService
        .searchCocktails(this.query)
        .subscribe((resp: Cocktail[]) => {
          this.options = resp ? resp : [];
        });
    } else {
      this.options = [];
    }
  }
}
