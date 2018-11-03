import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MailData } from './mail-data.model';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(mailData: MailData) {
    return this.http.post(
      `${environment.apiBaseUrl}/inner-path/email`,
      mailData
    );
  }
}
