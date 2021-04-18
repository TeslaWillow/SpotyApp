import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  
  private backend_url = environment.BACKEND_URL;

  constructor(
    private http:HttpClient
  ) { 
    this.getNewToken();
  }

  getQuery(api:string){
    this.getNewToken();
    const url = `https://api.spotify.com/v1/${api}`;

    return this.http.get(url);
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

  getNewToken(){
    return this.http.get(`${this.backend_url}/spotify`)
      .pipe(map((data:any) => data.access_token))
      .subscribe(
        (res:any) => {
          localStorage.setItem('spotyapp:token', res);
        }, 
        (err:any) => {
          console.log(err);
        }
      );
  }

}
