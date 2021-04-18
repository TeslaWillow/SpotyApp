import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token:string = "BQBo9lmici_upHG2qjmrBhUnW6cpwoC7ghJAmBPaFeg7iM26p--oIQhJrVWiaShaju2RcO_2WtXX7_iHNrc";

  constructor(
    private http:HttpClient
  ) { 
    console.log("Spofify Service UP")
  }

  getQuery(api:string){
    const url = `https://api.spotify.com/v1/${api}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery("browse/new-releases")
            .pipe( 
              map( (data:any) => data.albums.items)
            );
  }

  getArtist(_id:string){
    return this.getQuery(`artists/${_id}`);
  }

  getArtists(term:string){
    return this.getQuery(`search?q=${term}&type=artist&limit=10`)
            .pipe( 
              map( (data:any) => data.artists.items)
            );
  }

}
