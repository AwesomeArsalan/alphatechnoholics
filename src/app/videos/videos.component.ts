import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  playlistData;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPlaylistsData().subscribe((data: any[]) => {
      console.log(data);
      this.playlistData = data;
    });
  }

}
