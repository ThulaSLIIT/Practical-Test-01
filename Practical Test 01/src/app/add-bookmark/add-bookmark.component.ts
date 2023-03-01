import { Component, OnInit } from '@angular/core';
import { HttpClientService, Bookmark } from '../service/httpclient.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

  user: Bookmark = new Bookmark("","","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createBookmark(): void {
    this.httpClientService.createBookmark(this.user)
        .subscribe( data => {
          alert("Bookmark created successfully.");
        });

  };

}