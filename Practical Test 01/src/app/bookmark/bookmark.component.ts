import { Component, OnInit } from '@angular/core';
import { HttpClientService, Bookmark } from '../service/httpclient.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  bookmarks:Bookmark[];
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getBookmarks().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
    this.bookmarks=response;
}

deleteBookmark(bookmark: Bookmark): void {
  this.httpClientService.deleteBookmark(bookmark)
    .subscribe( data => {
      this.bookmarks = this.bookmarks.filter(u => u !== bookmark);
    })
};


}