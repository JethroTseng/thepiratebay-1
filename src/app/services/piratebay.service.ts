import { ITorrent } from './../interfaces/itorrent';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PiratebayService {

  constructor(private _http: HttpClient) {
    console.log('Piratebay service ready');
  }

  getTorrents() {
      const torrentUrl = `https://tpbc.herokuapp.com/recent/`;
      return this._http.get(torrentUrl);
  }
  /* changeUsername(username) {
   return this.username = username;
  } */

  /* getUser(username: string): Observable<IProfile> {
    if (username.length > 0) {
      const userUrl = `http://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
      return this._http.get(userUrl).map((res: any) => <IProfile> res);
    }
  } */

  /* getRepos(username: string) {
    if (username.length > 0) {
      const reposUrl = `http://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this._http.get(reposUrl).map(res => res);
    }
  } */

}
