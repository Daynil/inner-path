import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mapsFrameUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.mapsFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps/embed/v1/place?key=${
        environment.mapsApiKey
      }&q=Inner+Path,+Westmont,+IL+60559`
    );
  }
}
