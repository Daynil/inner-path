import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(
    email: string,
    nameFirst: string,
    nameLast: string,
    body: string,
    subject?: string
  ) {
    const mailData = {
      email,
      subject,
      body,
      first: nameFirst,
      last: nameLast
    };
    console.log(environment.apiBaseUrl);
    return this.http.post(
      `${environment.apiBaseUrl}/inner-path/email`,
      mailData
    );
  }
}
