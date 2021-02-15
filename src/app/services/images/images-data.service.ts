import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from 'src/app/interfaces/images/images.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesDataService {
  private baseUrl = './';

  constructor(private http: HttpClient) {}

  getImagesService(): Observable<Array<Images>> {
    return this.http.get<Array<Images>>(
      this.baseUrl + './assets/data/data.json'
    );
  }
}
