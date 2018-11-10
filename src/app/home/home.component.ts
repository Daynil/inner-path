import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .logo-full {
        height: 300px;
        margin: 0 auto;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
