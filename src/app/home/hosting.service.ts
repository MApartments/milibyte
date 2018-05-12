import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HostingService {
  backendUrl = 'http://5af6d472c222a90014dbda33.mockapi.io/api/v1/';
  constructor(private http: HttpClient) { }

  getShoutcasts() {
    const shoutcastsUrl = this.backendUrl + 'shoutcast';
    return this.http.get<any>(shoutcastsUrl);
  }
  getShoutcastsPremium() {
    const shoutcastsPremiumUrl = this.backendUrl + 'shoutcastPremium';
    return this.http.get<any>(shoutcastsPremiumUrl);
  }
  getHostingRookie() {
    const hostingRookieUrl = this.backendUrl + 'hostingRookie';
    return this.http.get<any>(hostingRookieUrl);
  }
  getHostingWarlord() {
    const   hostingWarlordUrl = this.backendUrl + 'hostingWarlord';
    return this.http.get<any>(hostingWarlordUrl);
  }
}

