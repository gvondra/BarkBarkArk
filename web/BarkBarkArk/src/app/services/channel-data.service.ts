import { Injectable } from '@angular/core';
import { ChannelData } from '../models/channel-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelDataService {
  private _channelData: ChannelData | null = null;

  constructor(private httpClient: HttpClient) { }

  get ChannelData(): ChannelData | null
  { 
    return this._channelData;
  }

  LoadSettings() : Promise<ChannelData> {
    return firstValueFrom(this.httpClient.get(environment["ChannelDataPath"]))
    .then(res => {
      this._channelData = res as ChannelData;
      return res as ChannelData;
    });
  }

  
}
