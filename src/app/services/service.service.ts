import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  get(partialUrl) {
    const url = `${this.apiUrl}${partialUrl}`;
    return this.http.get(url);
  }
  post(partialUrl, data) {
    const url = `${this.apiUrl}${partialUrl}`;
    return this.http.post(url, data);
  }
  put(partialUrl, data) {
    const url = `${this.apiUrl}${partialUrl}`;
    return this.http.put(url, data);
  }
  delete(partialUrl) {
    const url = `${this.apiUrl}${partialUrl}`;
    return this.http.delete(url);
  }
  search(partialUrl, json) {
    const url = `${this.apiUrl}${partialUrl}`;
    return this.http.get(url, { params: json });
  }
}
