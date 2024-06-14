export class Video {
    PublishedTimestammp: string | null = null;
    Title: string | null = null;
    VideoId: string | null = null;
    BlobName: string | null = null;
    AudioBlobName: string | null = null;
    IsStored: boolean = false;
    IsAudioStored: boolean = false;
    Tags: Array<string> = [];
}
