import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TestblogComponent } from './blogs/testblog/testblog.component';
import { Testblog2Component } from './blogs/testblog2/testblog2.component';


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'homepage', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'blog', component: BlogComponent,
    children: [
      { path: 'testblog', component: TestblogComponent },
      { path: 'testblog2', component: Testblog2Component }
    ]
  },
  { path: 'contact', component: ContactComponent},
  { path: 'videos/videoTutorial/:id', component: VideoPlayerComponent},

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
