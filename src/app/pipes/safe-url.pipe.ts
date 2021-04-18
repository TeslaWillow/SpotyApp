import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(
    private _domsanitizer:DomSanitizer
  ){}

  transform(value:string):SafeUrl {
    const url:string = 'https://open.spotify.com/embed/track/';
    return this._domsanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
