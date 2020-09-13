import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { DataService } from '../service/data.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  id: number;
  titles: string[] ;
  link: string;
  playLists;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.playLists.forEach((item) => {
    //   if (item.id == this.id) {
    //     this.titles = item.titles;
    //     this.link = item.links[0];
    //     (<HTMLIFrameElement>document.getElementById('videoIframe')).src = this.link;
    //   }
    // });
    this.dataService.getPlayListVideosData(this.id).subscribe((data: any[]) => {
      console.log(data);
      this.playLists = data;
      if (null != this.playLists && this.playLists.items.length > 0) {
        this.playVideo(this.playLists.items[0].snippet.resourceId.videoId, this.playLists.items[0].snippet.playListId);
      }
    });
  }

  // playVideo(index): void {
  //   this.playLists.forEach((item) => {
  //     if (item.id == this.id) {
  //       this.link = item.links[index];
  //       (<HTMLIFrameElement>document.getElementById('videoIframe')).src = this.link;
  //     }
  //   });
  // }

  playVideo(videoId, playListId): void {
    const embedUrl = 'https://www.youtube.com/embed/' + videoId + '?list=' + playListId;
    (<HTMLIFrameElement>document.getElementById('videoIframe')).src = embedUrl;
  }
}
