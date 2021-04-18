import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token:string = "BQCpruOl1BH_z9Dg7euHN28AXsf51X0R4kIGSKbcDki9peGUtuGlYbFaVsZJvHqB0wC6l2T9lP_uttFRGUM";

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

  getArtists(term:string){
    return this.getQuery(`search?q=${term}&type=artist&limit=10`)
            .pipe( 
              map( (data:any) => data.artists.items)
            );
  }

  getArtist(_id:string){
    return this.getQuery(`artists/${_id}`);
  }

  getTopTracks(_id:string, market:string ){
    return this.getQuery(`artists/${_id}/top-tracks?market=${market}`)
            .pipe( 
              map( (data:any) => data.tracks)
            );
  }

}
