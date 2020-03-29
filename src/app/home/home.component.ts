import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  path = '../../assets/img/';
  images = [
    {
      url: this.path + 'ali-moharami-CneC31xc2yo-unsplash.jpg',
      title: `Welcome to Frank's Garage`,
      desc: 'This is a description for the first slide.'
    },
    {
      url: this.path + 'colton-kresser-EvMbuGfazYU-unsplash.jpg',
      title: `Welcome to Frank's Garage`,
      desc: 'This is a description for the first slide.'
    },
    {
      url: this.path + 'ali-moharami-x183Fb93auU-unsplash.jpg',
      title: `Welcome to Frank's Garage`,
      desc: 'This is a description for the first slide.'
    },
    {
      url: this.path + 'mark-duffel-zF5PXrDp27s-unsplash.jpg',
      title: `Welcome to Frank's Garage`,
      desc: 'This is a description for the first slide.'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
