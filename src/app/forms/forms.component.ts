import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { saveAs } from 'file-saver';
import { DownloadService } from '../shared/download.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  constructor(
    private downloadService: DownloadService,
    public snackBar: MatSnackBar
  ) {}

  download(fileName: string) {
    this.downloadService.getFile(fileName).subscribe(
      (data: Blob) => {
        saveAs(data, `${fileName}.pdf`);
      },
      err => {
        this.snackBar.open(
          'File download error, please try again later.',
          'Close',
          {
            duration: 5000,
            panelClass: 'snackbar-color'
          }
        );
      }
    );
  }
}
