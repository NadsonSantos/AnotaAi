import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly apiUrl: string =
    'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
