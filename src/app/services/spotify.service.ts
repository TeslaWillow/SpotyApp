import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { 
    console.log("Spofify Service UP")
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCCXOASN0kLvAVpdRq2512ZhlRCJLfIA7IivLpPwhBR6M44Xf10uOsP61mSAn2aGuBQU0W3Oxh9DmD28Fs'
    });

    return this.http.get(`https://api.spotify.com/v1/browse/new-releases`, { headers } );
  }

}
