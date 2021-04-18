import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private backend_url = environment.BACKEND_URL;
  private token:string = "";

  constructor(
    private http:HttpClient
  ) { 
    console.log("Spofify Service UP")
  }

  getQuery(api:string){
    this.getNewToken();
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

  private getNewToken(){
    this.http.get(`${this.backend_url}/spotify`).subscribe(
      (res:any) => {
        this.token = res.access_token;
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

}
