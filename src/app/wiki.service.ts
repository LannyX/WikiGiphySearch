import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  wikiUrl =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=';

  constructor(private http: HttpClient) {
  }

  searchWikipedia(searchText: string): Observable<any> {
    const queryUrl = `${this.wikiUrl}${searchText}`;
    return this.http.get(queryUrl).pipe(
      map(response => response['query'].search.map(res => res['title'])
      )
    );
  }
}
