import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Entry } from '../types/entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private http: HttpClient) { }

  getAllEntries() {
    return this.http.get<Entry[]>(environment.apiUrl + 'data/facts?sortBy=_createdOn%20desc');
  }

  createEntry(data: any){
    return this.http.post<Entry[]>(environment.apiUrl + 'data/facts', data);
  }

}
