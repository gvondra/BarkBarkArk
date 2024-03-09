import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChannelDataService } from './services/channel-data.service';

export function channelDataFactory(channelDataService: ChannelDataService) {
  return () => channelDataService.LoadSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
