import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { MailData } from '../shared/mail-data.model';
import { MailService } from '../shared/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mapsFrameUrl: SafeUrl;
  model = new MailData();
  @ViewChild('contactForm')
  contactForm: NgForm;

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

  mail() {
    if (!this.contactForm.valid) {
      this.snackBar.open('Please fill out all fields.', 'Close', {
        duration: 5000,
        panelClass: 'snackbar-color'
      });
      return;
    }
    this.mailService.sendMail(this.model).subscribe(
      res => {
        this.snackBar.open('Email sent, thanks for contacting us!', 'Close', {
          duration: 5000,
          panelClass: 'snackbar-color'
        });
        this.model = new MailData();
        this.contactForm.resetForm();
      },
      err => {
        this.snackBar.open('Email error, please try again later.', 'Close', {
          duration: 5000,
          panelClass: 'snackbar-color'
        });
      }
    );
  }
}
