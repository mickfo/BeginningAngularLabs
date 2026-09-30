import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'button[appCounterButton]',
})
export class CounterButtonDirective {
  appCounterButton = input<'increment' | 'decrement'>('increment');

  private el = inject(ElementRef<HTMLButtonElement>);
  constructor() {
    this.el.nativeElement.classList.add('btn', 'btn-error', 'btn-sm', 'btn-circle');
  }
}
