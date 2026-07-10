import { Component, signal } from '@angular/core';

@Component({
  selector: 'sf-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sf');
}
