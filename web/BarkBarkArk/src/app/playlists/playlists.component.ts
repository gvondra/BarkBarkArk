import { Component, EventEmitter, Output } from '@angular/core';
import { Playlist } from '../models/playlist';
import { PlayListDataService } from '../services/play-list-data.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {
  @Output() close = new EventEmitter();
  @Output() playlistSelected = new EventEmitter();
  Playlists: Array<Playlist> = [];

  constructor(private playlistDataService: PlayListDataService) { }

  ngOnInit(): void {
    this.Playlists = this.playlistDataService.Playlists;
  }

  onClose() {
    this.close.emit();
  }

  onPlaylistSelected(playlist: Playlist) {
    this.playlistSelected.emit(playlist);
  }
}
