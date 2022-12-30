import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @ViewChild('tiresCounters') tiresCounters: ElementRef;
  @ViewChild('yearsCounter') yearsCounter: ElementRef;
  @ViewChild('customersCounter') customersCounter: ElementRef;

  tires = 0;
  years = 0;
  customers = 0;
  constructor() {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event) {
    var rect = this.tiresCounters.nativeElement.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    if (elemTop >= 0 && elemBottom <= window.innerHeight) {
      this.tires = 45000;
    }

    rect = this.yearsCounter.nativeElement.getBoundingClientRect();
    elemTop = rect.top;
    elemBottom = rect.bottom;
    if (elemTop >= 0 && elemBottom <= window.innerHeight) {
      this.years = 20;
    }

    rect = this.customersCounter.nativeElement.getBoundingClientRect();
    elemTop = rect.top;
    elemBottom = rect.bottom;
    if (elemTop >= 0 && elemBottom <= window.innerHeight) {
      this.customers = 9000;
    }
  }

  ngOnInit(): void {}
}
