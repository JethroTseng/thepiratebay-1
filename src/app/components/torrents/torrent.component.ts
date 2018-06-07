import { ITorrent } from './../../interfaces/itorrent';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { PiratebayService } from '../../services/piratebay.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css'],
  providers: [PiratebayService]
})
export class TorrentComponent {
user: ITorrent[] = [];
torrent: any;
torrents: any;
topTorrents: any;
top40Torrents: any;
searchTorrents: any;
searchTerm: string;
loader: boolean;

  constructor(private _http: HttpClient, private _piratebay: PiratebayService) {}

  getTorrents() {
    this.loader = true;
    const torrentUrl = `https://tpbc.herokuapp.com/recent/`;
    this.torrent = this._http.get(torrentUrl).map(res => res).subscribe(res2 => {
      // console.log('Response: ' + res2);
      this.torrents = <ITorrent[]> res2;
    });
    this.loader = false;
  }
  getTopTorrents(x) {
    this.loader = true;
    const torrentUrl = `https://tpbc.herokuapp.com/top/${x}/`;
    this.torrent = this._http.get(torrentUrl).map(res => res).subscribe(res2 => {
      // console.log('Response: ' + res2);
      this.topTorrents = <ITorrent[]> res2;
    });
    this.loader = false;
  }
  getTop48Torrents(y) {
    this.loader = true;
    const torrentUrl = `https://tpbc.herokuapp.com/top48h/${y}/`;
    this.torrent = this._http.get(torrentUrl).map(res => res).subscribe(res2 => {
      // console.log('Response: ' + res2);
      this.top40Torrents = <ITorrent[]> res2;
    });
    this.loader = false;
  }

  search2() {
    console.log(this.searchTerm);
    this.loader = true;
    if (this.searchTerm.length > 0 || this.searchTerm !== ' ') {
      const torrentUrl = `https://tpbc.herokuapp.com/search/${this.searchTerm}/`;
      this.torrent = this._http.get(torrentUrl).map(res => res).subscribe(res2 => {
        this.searchTorrents = <ITorrent[]> res2;
      });
      this.loader = false;
    }
  }

  searchAdvanced() {}
}
