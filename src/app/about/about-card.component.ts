import { Component, Input } from '@angular/core';

export class Person {
  constructor(
    public nameFirst: string,
    public nameLast: string,
    public creds: string,
    public picUrl: string,
    public pageUrl: string
  ) {}

  public fullName() {
    return `${this.nameFirst} ${this.nameLast}`;
  }
}

@Component({
  selector: 'app-about-card',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title id="title">{{ person.fullName() }}</mat-card-title>
        <mat-card-subtitle id="subtitle">{{ person.creds }}</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        [src]="person.picUrl"
        alt="Photo of a {{person.fullName()}}"
      />
      <mat-card-actions>
        <button mat-stroked-button color="accent" [routerLink]="person.pageUrl">
          More Info
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      #title {
        font-size: 18px;
      }
      #subtitle {
        font-size: 16px;
      }
      button {
        position: relative;
        bottom: 10px;
        left: 10px;
      }
    `
  ]
})
export class AboutCardComponent {
  @Input() person: Person;

  constructor() {}
}
