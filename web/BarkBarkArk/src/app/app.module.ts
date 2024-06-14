import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ChannelDataService } from './services/channel-data.service';
import { VideoComponent } from './video/video.component';
import { AboutComponent } from './about/about.component';
import { AudioComponent } from './audio/audio.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlayListDataService } from './services/play-list-data.service';

export function channelDataFactory(channelDataService: ChannelDataService) {
  return () => channelDataService.LoadSettings();
}

export function playlistDataFactory(playlistDataService: PlayListDataService) {
  return () => playlistDataService.LoadSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    AboutComponent,
    AudioComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [
    ChannelDataService,
    PlayListDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: channelDataFactory,
      deps: [ChannelDataService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: playlistDataFactory,
      deps: [PlayListDataService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
