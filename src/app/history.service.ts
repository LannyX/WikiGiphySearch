import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  searchHistory: any[] = [];

  constructor() { }

  pushSearch(searchText: string) {
    this.searchHistory.push({searchText: searchText, timestamp: new Date()});

    console.log(this.searchHistory);
  }

  getHistory(): any[] {
    return this.searchHistory;
  }
}
