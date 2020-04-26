import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class DownloadService {
  constructor(private http: HttpClient) {}

  getFile(fileName) {
    return this.http
      .get(`${environment.apiBaseUrl}/getDocument/${fileName}.pdf`, {
        responseType: "arraybuffer",
      })
      .pipe(
        map((res: any) => {
          return new Blob([res], { type: "application/pdf" });
        })
      );
  }
}
