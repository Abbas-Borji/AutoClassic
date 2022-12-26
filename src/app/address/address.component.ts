import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  center = { lat: 59.5221595, lng: 17.6227741 };
  marker = { lat: 59.5221595, lng: 17.6227741 };

  constructor() {}

  ngOnInit(): void {}
}
