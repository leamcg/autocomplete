import { Component } from '@angular/core';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutocompleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
