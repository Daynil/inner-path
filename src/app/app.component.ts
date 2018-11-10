import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MailData } from './shared/mail-data.model';
import { MailService } from './shared/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  copydate: string;
  model = new MailData();
  transitioning = false;
  @ViewChild('footerContactForm')
  footerContactForm: NgForm;

  opened: boolean;

  constructor(
    private router: Router,
    private mailService: MailService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.copydate = new Date().getFullYear() + '';
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => this.transition());
  }

  transition() {
    if (this.transitioning) this.transitioning = false;
    this.transitioning = true;
    setTimeout(() => (this.transitioning = false), 600);
  }

  blog(who: string) {
    let url = 'https://spiercounseling.wordpress.com/';
    if (who !== 'shelley') url = 'https://softanimalwisdom.wordpress.com/';
    window.open(url);
  }

  mail() {
    if (!this.footerContactForm.valid) {
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
        this.footerContactForm.resetForm();
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
