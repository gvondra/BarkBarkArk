import { PlaylistItem } from "./playlist-item";

export class Playlist {
    Id: string | null = null;
    PublishedTimestamp: string | null = null;
    Title: string = "";
    Description: string = "";
    Items: Array<PlaylistItem> | null = null;
}
