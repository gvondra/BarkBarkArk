import { Component } from '@angular/core';
import { ChannelData } from '../models/channel-data';
import { ChannelDataService } from '../services/channel-data.service';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ChannelData: ChannelData | null = null;

  constructor(private channelDataService: ChannelDataService) { }

  get Videos(): Array<Video> {
    return this.ChannelData?.Videos || [];
  }

  ngOnInit(): void {
    this.ChannelData = this.channelDataService.ChannelData;
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
    return [ "/video", environment['AssetsDirectory'], video.BlobName ?? "" ]
  }
}
