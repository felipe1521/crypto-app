import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) {}

  public getAllCryptos(): Observable<any> {
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=clp&per_page=40&page=1');
  }
}
