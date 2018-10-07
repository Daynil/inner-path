import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  copydate: string;

  transitioning = false;

  constructor(private router: Router) {}

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
