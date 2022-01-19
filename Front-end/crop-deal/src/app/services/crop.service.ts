import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from '../components/cls/crop';
import { HttpClient } from '@angular/common/http';
import { Dealer } from '../components/cls/dealer';
import { Payment } from '../components/cls/payment';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  private baseURL1 = "http://localhost:9005/findcrop";
  private baseURL2= "http://localhost:9002/finddealer"
  private baseURL3= "http://localhost:8006/pay";
  
  constructor( private httpClient: HttpClient) { }

  getcrop(): Observable<Crop[]>{
    return this.httpClient.get<Crop[]>(this.baseURL1);
  }

  createCrops(crop: Crop): Observable<object>{
    return this.httpClient.post(`${this.baseURL1}`, crop);
  }

  getCropById(id: string): Observable<Crop>{
    return this.httpClient.get<Crop>(`${this.baseURL1}/${id}`);
  }
  
  updateCrop(id: string, crop: Crop): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${id}`, crop);
  }

  deleteCrop(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL1}/${id}`);
  }

  // dealer---------------------------------------------------------

  getdealer():  Observable<Dealer[]>{
    return this.httpClient.get<Dealer[]>(this.baseURL2);
  }

   getDealerById(id: string): Observable<Dealer>{
    return this.httpClient.get<Dealer>(`${this.baseURL2}/${id}`);
  }

  deleteDealer(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${id}`);
    
  }

  //payment----------------------------------------------------------------

  getpayment():  Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(this.baseURL3);
  } 

}
