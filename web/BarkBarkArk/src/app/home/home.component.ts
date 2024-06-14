import { Component } from '@angular/core';
import { ChannelData } from '../models/channel-data';
import { ChannelDataService } from '../services/channel-data.service';
import { Video } from '../models/video';
import { Subject, delay } from 'rxjs';
import { Playlist } from '../models/playlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ChannelData: ChannelData | null = null;
  ShowAbout: boolean = false;
  ShowVideo: boolean = false;
  ShowAudio: boolean = false;
  ShowPlaylists: boolean = false;
  SelectedVideo: Video | null = null;
  Filter: string = "";
  HomeDisplay: string = "";
  HomeVisibility: string = "";
  AnchorTarget: any | null = null;
  ScrollIntoViewSubject: Subject<any> = new Subject<any>();

  constructor(private channelDataService: ChannelDataService) { }

  get Videos(): Array<Video> {
    return this.ChannelData?.Videos || [];
  }

  ngOnInit(): void {
    this.ChannelData = this.channelDataService.ChannelData;
    this.ScrollIntoViewSubject
      .pipe(delay(1000))
      .subscribe(tgt => tgt.scrollIntoView());
  }

  filterGlobal(table: any, event: any, type: string) {
    table.filterGlobal(event.target.value, type);
  }

  toLocalDate(timestamp: string) : string {
    let result: string = "";
    if (timestamp && timestamp != "") {
      let dt: Date = new Date(timestamp);
      result = dt.toLocaleDateString();
    }
    return result;
  }

  joinTags(tags: Array<string> | null) : string {
    let result: string = "";
    if (tags && tags.length > 0) {
      result = tags.join(", ");
    }
    return result;
  }

  getVideoAddress(video: Video): Array<string> {
    return [ "/video", video.VideoId ?? "" ];
  }
  
  showAbout() {
    this.hideAll();
    this.ShowAbout = true;
  }

  closeAbout() {
    this.hideAll();
    this.showHome();
  }

  showVideo(evnt: any, video: Video) {
    this.AnchorTarget = evnt.target;
    this.SelectedVideo = video;
    this.hideAll();
    this.ShowVideo = true;
  }

  closeVideo() {
    this.hideAll();
    this.showHome();
    if (this.AnchorTarget) {
      this.ScrollIntoViewSubject.next(this.AnchorTarget);
    }
  }

  showAudio(evnt: any, video: Video) {
    this.AnchorTarget = evnt.target;
    this.SelectedVideo = video;
    this.hideAll();
    this.ShowAudio = true;
  }

  showPlaylists() {
    this.hideAll();
    this.ShowPlaylists = true;
  }

  closePlaylists() {
    this.hideAll();
    this.showHome();
  }

  playlistSelected(playlist: Playlist) {
    this.hideAll();
    this.showHome();
  }

  private showHome() {
    this.HomeDisplay = "";
    this.HomeVisibility = "";
  }

  private hideAll() {
    this.HomeDisplay = "none";
    this.HomeVisibility = "hidden";
    this.ShowAbout = false;
    this.ShowVideo = false;
    this.ShowAudio = false;
    this.ShowPlaylists = false;
  }
}
