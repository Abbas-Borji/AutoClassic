import { Component, OnInit } from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor(private _animationBuilder: AnimationBuilder) {}
  animateCounter(element: any, endValue: number) {
    const animation = this._animationBuilder.build([
      animate('400ms ease-in-out', style({
        // Animate the element's innerHTML from zero to the end value
        innerHTML: `${endValue}`
      }))
    ]);
    const player = animation.create(element);
    player.play();
  }
  ngOnInit(): void {} 
}
