import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../components/cls/payment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
   apiUrl="http://localhost:8006/pay"
  constructor(private http:HttpClient) { }

  makePayment(pay:Payment)

    :Observable<Object>{

      return this.http.post(`${this.apiUrl}`,pay);

  }
}
