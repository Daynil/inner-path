import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DownloadService } from './download.service';
import { MailService } from './mail.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [MailService, DownloadService],
  exports: [FormsModule, HttpClientModule]
})
export class SharedModule {}
