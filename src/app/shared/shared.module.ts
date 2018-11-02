import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MailService } from './mail.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [MailService],
  exports: [FormsModule, HttpClientModule]
})
export class SharedModule {}
