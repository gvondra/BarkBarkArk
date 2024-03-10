import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ChannelDataService } from './services/channel-data.service';
import { VideoComponent } from './video/video.component';
import { AboutComponent } from './about/about.component';

export function channelDataFactory(channelDataService: ChannelDataService) {
  return () => channelDataService.LoadSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [
    ChannelDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: channelDataFactory,
      deps: [ChannelDataService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
