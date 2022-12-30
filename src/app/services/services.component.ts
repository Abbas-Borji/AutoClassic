import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  servicesList = [
    {
      image: 'assets/tire-storage.jpg',
      title: 'Tire Storage',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image: 'assets/tire-storage.jpg',
      title: 'Tire Storage',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image: 'assets/gearbox.png',
      title: 'Automatic Gearbox',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image: 'assets/diagnosis.png',
      title: 'Diagnosis',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image: 'assets/nitrogen.jpg',
      title: 'Nitrogen Tire Fill',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image: 'assets/rims.jpg',
      title: 'Buy New Rims',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
