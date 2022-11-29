import { Component, OnInit } from '@angular/core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  symbols = [
    {
      icon: faGoogle,
      link: 'https://www.google.com/search?q=autoclassics+sweden+bro&oq=&aqs=chrome.2.69i59i450l4.1129311123j0j15&sourceid=chrome&ie=UTF-8#lrd=0x465fa59871f508eb:0x1e02e5c03c1b4722,1',
      target: '_blank',
    },
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/www.autoclassic.se',
      target: '_blank',
    },
    { icon: faEnvelope, link: 'mailto:autoclassic@live.se' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
