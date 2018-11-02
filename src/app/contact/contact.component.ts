import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { MailService } from '../shared/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mapsFrameUrl: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private mailService: MailService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.mapsFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps/embed/v1/place?key=${
        environment.mapsApiKey
      }&q=Inner+Path,+Westmont,+IL+60559`
    );
  }

  mail(
    email: HTMLInputElement,
    nameFirst: HTMLInputElement,
    nameLast: HTMLInputElement,
    subject: HTMLSelectElement,
    body: HTMLTextAreaElement
  ) {
    const emailTxt = email.value;
    const firstTxt = nameFirst.value;
    const lastTxt = nameLast.value;
    const subjectTxt = subject.value;
    const bodyTxt = body.value;

    this.mailService
      .sendMail(emailTxt, firstTxt, lastTxt, bodyTxt, subjectTxt)
      .subscribe(
        res => {
          this.snackBar.open('Email sent, thanks for contacting us!', 'Close', {
            duration: 5000,
            panelClass: 'snackbar-color'
          });
          email.value = '';
          nameFirst.value = '';
          nameLast.value = '';
          subject.value = '';
          body.value = '';
        },
        err =>
          this.snackBar.open('Email error, please try again later.', 'Close', {
            duration: 5000,
            panelClass: 'snackbar-color'
          })
      );
  }
}
