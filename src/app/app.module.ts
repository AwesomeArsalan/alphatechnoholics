import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SafePipe } from './video-player/video-player.component';
import { TestblogComponent } from './blogs/testblog/testblog.component';
import { Testblog2Component } from './blogs/testblog2/testblog2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    VideosComponent,
    BlogComponent,
    ContactComponent,
    ErrorComponent,
    VideoPlayerComponent,
    SafePipe,
    TestblogComponent,
    Testblog2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
