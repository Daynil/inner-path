import { Component, OnInit } from '@angular/core';
import { Person } from '../about-card.component';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  people: Person[];

  constructor() {}

  ngOnInit() {
    this.people = [
      new Person(
        'Shelley',
        'Pier',
        'LCSW',
        'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1474301780/home_mxdrbd.jpg',
        '../shelley'
      ),
      new Person(
        'Eryn',
        'Smith-Moeller',
        'LCPC',
        'https://res.cloudinary.com/dz9rf4hwz/image/upload/v1540147308/innerpath/Eryn_s_pic.png',
        '../eryn'
      ),
      new Person(
        'Asma',
        'Afridi',
        'MeD, LCPC, PEL',
        'https://res.cloudinary.com/dz9rf4hwz/image/upload/v1540148695/innerpath/Asma.jpg',
        '../asma'
      ),
      new Person(
        'Monique',
        'Prohaska-Slattery',
        'LCPC, ATR, CYT',
        'https://res.cloudinary.com/dz9rf4hwz/image/upload/v1540148413/innerpath/Monique_s_pic.jpg',
        '../monique'
      ),
      new Person(
        'Sue',
        'Shekut',
        'LCPC, LMT',
        'https://res.cloudinary.com/dz9rf4hwz/image/upload/v1547780304/innerpath/SueShekut_7-17_5845_sm.jpg',
        '../sue'
      ),
      new Person(
        'Cassie',
        '',
        'Therapy Dog',
        'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1472417659/FB_IMG_1470266619808_whqzlc.jpg',
        '../cassie'
      )
    ];
  }
}
