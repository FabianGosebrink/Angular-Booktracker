import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class HttpBaseService {
  private serverWithApi = environment.server + environment.api;

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.serverWithApi}${url}`);
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.serverWithApi}${url}`, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.serverWithApi}${url}`, body);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.serverWithApi}${url}`);
  }

  patch<T>(url: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.serverWithApi}${url}`, body);
  }
}
