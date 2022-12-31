import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.fragment.subscribe((f) => {
        const element = document.querySelector('#' + f);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      });
    }, 250);
  }
}
