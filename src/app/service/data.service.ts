import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  playlistsUrl = 'https://www.googleapis.com/youtube/v3/playlists';
  playlistVideosUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
  channelId = 'UC5oFTrkMXjdDm-kJMgn3k1Q';
  key = 'AIzaSyAnrBpM1b3VSWzVh1tEIVVhkTUOUq4Oyys';

  constructor(private httpClient: HttpClient) { }

  getPlaylistsData(): any {
    const opts = {
    params: new HttpParams(
      {fromString: 'part=snippet&channelId=' + this.channelId + '&key=' + this.key + '&fields=items(id,snippet)'}
    )};
    return this.httpClient.get(this.playlistsUrl, opts);
  }

  getPlayListVideosData(pid): any {
    const opts = {
      params: new HttpParams(
        {fromString: 'part=snippet&playlistId=' + pid + '&key=' + this.key + '&fields=items(id,snippet)'}
      )};
    return this.httpClient.get(this.playlistVideosUrl, opts);
  }

}
