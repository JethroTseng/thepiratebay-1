import { AppError } from './../errors/app-error';
import { Jsonp } from '@angular/http';
import { ITorrent } from './../../interfaces/itorrent';
import { Component, OnInit } from '@angular/core';
import { PiratebayService } from '../../services/piratebay.service';
import { NotFoundError } from '../errors/not-found-error';

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css'],
  providers: [PiratebayService]
})



export class TorrentComponent implements OnInit {
torrents: any;
topTorrents: any;
top40Torrents: any;
searchTorrents: any;
searchTerm: string;

  constructor(private _jsonp: Jsonp, private _piratebay: PiratebayService) {}

  ngOnInit() {
    // this.getTorrents();
  }

  /* getTorrents() {
    // const torrentUrl = `/recent/?callback=JSONP_CALLBACK`;
    const torrentUrl = `/recent/?callback=__ng_jsonp__.__req${this.times}.finished`;
    this.times++;
    this._jsonp.request(torrentUrl, { method: 'Get' })
    .subscribe(res2 => {
      console.log(res2);
    });
    // console.log(this.torrent);
  } */

  getTorrents() {
    this._piratebay.getTorrents()
      .subscribe(
        res2 => {
        // console.log('Response: ' + res2);
        this.torrents = <ITorrent[]> res2;
      });
  }

  getTopTorrents(x) {
    this._piratebay.getTopTorrents(x)
    .subscribe(
      res2 => {
      // console.log('Response: ' + res2);
      this.topTorrents = <ITorrent[]> res2;
    });
    }

  getTop48Torrents(y) {
    this._piratebay.getTop48Torrents(y)
      .subscribe(res2 => {
      // console.log('Response: ' + res2);
      this.top40Torrents = <ITorrent[]> res2;
    });
  }

  search2() {
    console.log(this.searchTerm);
      this._piratebay.search2(this.searchTerm)
        .subscribe(res2 => {
        this.searchTorrents = <ITorrent[]> res2;
      });
  }

  divClicked() {
    console.log('Div was clicked');
  }

  searchAdvanced() {}
}
