import { Component } from '@angular/core';
import { PiratebayService } from './services/piratebay.service';
import {TorrentComponent} from './components/torrents/torrent.component';
import { DisplayComponent } from './components/display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PiratebayService]
})
export class AppComponent {
  title = 'app';
}
