import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Bookmark{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getBookmarks()
  {
    console.log("test call");
    return this.httpClient.get<Bookmark[]>('http://localhost:8080/bookmarkbookmarks');
  }

  public deleteBookmark(bookmark) {
    return this.httpClient.delete<Bookmark>("http://localhost:8080/bookmarks" + "/"+ bookmark.empId);
  }

  public createBookmark(bookmark) {
    return this.httpClient.post<Bookmark>("http://localhost:8080/bookmarks", bookmarkbookmark);
  }
}