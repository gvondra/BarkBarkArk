import { Video } from './video';

export class ChannelData {
    Id: string | null = null;
    Title: string | null = null;
    PlaylistId: string | null = null;
    YouTubDataTimestamp: string | null = null;
    Videos: Array<Video> = [];
}
