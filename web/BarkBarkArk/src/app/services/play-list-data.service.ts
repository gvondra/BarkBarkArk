import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Playlist } from '../models/playlist';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayListDataService {
  private _playlists: Array<Playlist> = [];

  constructor(private httpClient: HttpClient) { }

  get Playlists(): Array<Playlist> {
    return this._playlists;
  }

  LoadSettings() : Promise<Array<Playlist>> {
    return firstValueFrom(this.httpClient.get(environment["PlaylistDataPath"]))
    .then(res => {
      this._playlists = res as Array<Playlist>;
      return res as Array<Playlist>;
    });
  }
}
