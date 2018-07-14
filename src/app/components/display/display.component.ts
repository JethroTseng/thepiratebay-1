import { ITorrent } from './../../interfaces/itorrent';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { PiratebayService } from '../../services/piratebay.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  providers: [PiratebayService]
})
export class DisplayComponent {
user: ITorrent[] = [];
repos: any;
torrents: any;
loader: boolean;

  constructor(private _http: HttpClient, private _piratebay: PiratebayService) {}

  getTorrents() {
    this.loader = true;
    const torrentUrl = `https://tpbc.herokuapp.com/recent/`;
    this.repos = this._http.get(torrentUrl).map(res => res).subscribe(res2 => {
      // console.log('Response: ' + res2);
      this.torrents = <ITorrent[]> res2;
    });
    this.loader = false;
  }
  getTopTorrents() {
    this.loader = true;
    const torrentUrl = `https://tpbc.herokuapp.com/top/0`;
    this.repos = this._http.get(torrentUrl).map(res => res).subscribe(res2 => {
      // console.log('Response: ' + res2);
      this.torrents = <ITorrent[]> res2;
    });
    this.loader = false;
  }
  getTop48Torrents() {
    this.loader = true;
    const torrentUrl = `https://tpbc.herokuapp.com/top48h/0`;
    this.repos = this._http.get(torrentUrl).map(res => res).subscribe(res2 => {
      // console.log('Response: ' + res2);
      this.torrents = <ITorrent[]> res2;
    });
    this.loader = false;
  }
}
