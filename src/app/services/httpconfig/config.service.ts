import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  public get(url: string, options?: any):Observable<any>{
    return this.http.get(url, options);
  }

  public post(url: string, options?: any):Observable<any>{
    return this.http.post(url, options);
  }

  public put(url: string, options?: any):Observable<any>{
    return this.http.put(url, options);
  }

  public delete(url: string, options?: any):Observable<any>{
    return this.http.delete(url, options);
  }
}
