import { Component, signal } from '@angular/core';
import { Counter } from '../demos/counter';

@Component({
  selector: 'app-counter-demo-page',
  imports: [Counter],
  template: ` <app-counter message="Number 1" />
    <app-counter [message]="msg()" />
    <app-counter [message]="msg()" />
    <app-counter message="Bottom" />
    <button
      (click)="msg.update((m) => m.toUpperCase())"
      type="button"
      class="btn btn-xl btn-accent"
    >
      Click Me
    </button>`,
  styles: ``,
})
export class CounterDemo {
  msg = signal('Another');
}
