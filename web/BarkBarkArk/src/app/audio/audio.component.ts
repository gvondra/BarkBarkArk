import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent {
  @Input() Video: Video | null = null;
  @Output() close = new EventEmitter();

  getSource(): string {
    let result: string = "";
    if (this.Video != null) {
      result = [ environment["AssetsDirectory"], this.Video.AudioBlobName ].join("/");
    }
    return result;
  }

  onClose() {
    this.close.emit();
  }
}
