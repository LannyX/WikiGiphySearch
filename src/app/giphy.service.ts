import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  giphyKey = 'zEmIDhsws9aZWUZu4srKlFdb87XeBttX';

  // base url for Giphy API
  giphyBaseUrl = 'https://api.giphy.com/v1/gifs/search?';
  // API key
  giphyApiKey = `api_key=${this.giphyKey}`;
  // url param for search text
  resultParam = '&limit=5&offset=0&rating=G&lang=en';

  constructor(private http: HttpClient) { }

  searchGiphy(searchText: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const queryUrl = `${this.giphyBaseUrl}${this.giphyApiKey}&q=${searchText}${this.resultParam}`;
    return this.http.get(queryUrl).pipe(
      map(response => response['data'].map(res => res['images']['original']['url']))
    );
  }
}
