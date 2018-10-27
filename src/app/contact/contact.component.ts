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

  mail(
    nameFirst: HTMLInputElement,
    nameLast: HTMLInputElement,
    email: HTMLInputElement,
    body: HTMLTextAreaElement
  ) {
    const firstTxt = nameFirst.value;
    const lastTxt = nameLast.value;
    const emailTxt = email.value;
    const subjectTxt = 'Footer contact';
    const bodyTxt = body.value;
    const vals = [firstTxt, lastTxt, emailTxt, bodyTxt];
    let canSubmit = true;
    // for (let i = 0; i < vals.length; i++) {
    //   const curVal = vals[i];
    //   if (curVal.length < 1) {
    //     this.toast.error(`Please fill out all fields!`);
    //     canSubmit = false;
    //     break;
    //   }
    // }
    // if (canSubmit) {
    //   this.mailService
    //       .sendEmail(firstTxt, lastTxt,
    //                  emailTxt, subjectTxt, bodyTxt)
    //       .then(res => {
    //         if (res.message === 'sent') {
    //           this.toast.success('Email sent!');
    //           nameFirst.value = '';
    //           nameLast.value = '';
    //           email.value = '';
    //           body.value = '';
    //         }
    //       });
    // }
  }
}
