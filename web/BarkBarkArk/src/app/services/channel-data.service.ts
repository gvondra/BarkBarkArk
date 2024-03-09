import { Injectable } from '@angular/core';
import { ChannelData } from '../models/channel-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelDataService {
  private ChannelData: ChannelData | null = null;

  constructor(private httpClient: HttpClient) { }

  LoadSettings() : Promise<ChannelData> {
    return firstValueFrom(this.httpClient.get(environment["ChannelDataPath"]))
    .then(res => {
      this.ChannelData = res as ChannelData;
      return res as ChannelData;
    });
  }
}
