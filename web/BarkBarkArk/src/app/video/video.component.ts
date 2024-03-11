import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Input() Video: Video | null = null;
  @Output() close = new EventEmitter();

  getSource(): string {
    let result: string = "";
    if (this.Video != null) {
      result = [ environment["AssetsDirectory"], this.Video.BlobName ].join("/");
    }
    return result;
  }

  onClose() {
    this.close.emit();
  }
}
