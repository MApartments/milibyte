import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Shoutcast} from './shoutcast';
import {Hosting} from './hosting';

@Injectable()
export class HostingService {
  backendUrl = 'http://5af6d472c222a90014dbda33.mockapi.io/api/v1/';
  constructor(private http: HttpClient) { }

  getShoutcasts() {
    const shoutcastsUrl = this.backendUrl + 'shoutcast';
    return this.http.get<Shoutcast[]>(shoutcastsUrl);
  }
  getHostings() {
    const HostingsUrl = this.backendUrl + 'hosting';
    return this.http.get<Hosting[]>(HostingsUrl);
  }
}

