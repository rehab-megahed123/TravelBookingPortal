import { Injectable } from '@angular/core';
import { Ireview } from '../models/ireview';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IcreateReview } from '../models/icreate-review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {



  getByHotelId(hotelId: number): Observable<Ireview[]> {
    return this._httpClientService.get<Ireview[]>(
      `${environment.baseUrl}/api/Reviews/hotel/${hotelId}`
    );
  }
  addReview(review: IcreateReview): Observable<Ireview> {
    return this._httpClientService.post<Ireview>(
      `${environment.baseUrl}/api/Reviews`,
      review
    );
  }
  constructor(private _httpClientService:HttpClient) { }

}
