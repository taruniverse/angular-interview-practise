import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals implements OnInit {
  countSignal = signal(0);
  // computed(fn) is whose value is calculated from scratch but derived by applying/modification to the input data, if dependent signal changes this will also get triggered default
  double = computed(() => this.countSignal() * 2);
  arraySignal = signal<any>([]);

  constructor() {
    // effect() it trigger when dependent signals triggered or changed
    effect(() => {
      console.log('Counter Change:', this.countSignal() * 2);
    });
  }

  ngOnInit(): void {
    this.countSignal.set(1);
    this.arraySignal.set([{ name: 'Tarun', age: 19 }]);
  }

  // mutate(fn) was depreceated with angular version 18 and it was replaced by update function only

  incrementItem(type: string) {
    if (type == 'count') this.countSignal.update((value) => value + 1);
    if (type == 'array')
      this.arraySignal.update(() => {
        return [...this.arraySignal(), { name: 'Tarun', age: 29 }];
      });
  }

  decrementItem(type: string) {
    if (type == 'count') this.countSignal.update((value) => value - 1);
    if (type == 'array')
      this.arraySignal.update(() => {
        return [{ name: 'No Items' }];
      });
  }
}
