import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostNameService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  getHostname() : string {
    return this.document.location.protocol + '//' + this.document.location.host;
  }
}
