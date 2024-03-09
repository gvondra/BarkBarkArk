import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChannelData } from '../models/channel-data';
import { ChannelDataService } from '../services/channel-data.service';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  ChannelData: ChannelData | null = null;
  Video: Video | null = null;

  constructor(
    private activatedRout: ActivatedRoute,
    private location: Location,
    private channelDataService: ChannelDataService) { }

  ngOnInit(): void {
    this.ChannelData = this.channelDataService.ChannelData;    
    this.activatedRout.params.subscribe(params => {
      this.Video = null;
      if (params["id"]) {
        this.Video = this.findVideo(this.ChannelData?.Videos || null, params["id"]);
      }
    });
  }

  private findVideo(videos: Array<Video> | null, id: string): Video | null {
    let result: Video | null = null;
    if (videos != null && videos.length > 0) {
      let i: number = 0;
      while (result == null && i < videos.length) {
        if (id == videos[i].VideoId) {
          result = videos[i];
        }
        i += 1;
      }
    }
    return result;
  }

  getSource(): string {
    let result: string = "";
    if (this.Video != null) {
      result = [ environment["AssetsDirectory"], this.Video.BlobName ].join("/");
    }
    return result;
  }

  back() {
    this.location.back();
  }
}
