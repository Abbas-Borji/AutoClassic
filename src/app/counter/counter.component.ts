import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @ViewChild('cardTitleElement1') cardTitleElement1: ElementRef | null = null;
  @ViewChild('cardTitleElement2') cardTitleElement2: ElementRef | null = null;
  @ViewChild('cardTitleElement3') cardTitleElement3: ElementRef | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  animateCounter(element: HTMLElement, target: number): void {
    let currentValue = 0;
    const interval = setInterval(() => {
      element.innerHTML = currentValue.toString();
      currentValue++;
      if (currentValue > target) {
        clearInterval(interval);
      }
    }, 50);
  }
  
}
