import { Component, OnInit } from '@angular/core';

import { WikiService } from '../wiki.service';
import { HistoryService } from '../history.service';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // search text
  searchText: string = '';

  // search results from Wikipedia
  wikiSearchResults: string[];

  // search results from Giphy
  giphySearchResults: string[];

  constructor(private wikiService: WikiService, private giphyService: GiphyService, private historyService: HistoryService) {
  }

  ngOnInit() {
  }

  search() {
    if (this.searchText === '') {
      return;
    }

    // search from Wikipedia
    this.wikiService.searchWikipedia(this.searchText).subscribe(
      (response) => {
        console.log('Got search results from Wikipedia successfully!');
        console.log(response);

        this.wikiSearchResults = response;
      },
      (error) => {
        console.log(`Failed to search '${this.searchText}' on Wikipedia!`);
        console.log(error);
      }
    );

    // search from Giphy
    this.giphyService.searchGiphy(this.searchText).subscribe(
      (response) => {
        console.log('Got search results from Giphy successfully!');
        console.log(response);

        this.giphySearchResults = response;
      },
      (error) => {
        console.log(`Failed to search '${this.searchText}' on Giphy!`);
        console.log(error);
      }
    );

    // save the search into history
    this.historyService.pushSearch(this.searchText);
  }
}
