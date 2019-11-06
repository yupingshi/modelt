import { Component,OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'elecstore';
  // cc:any = "https://accstorefront.cmja9gw7m-psdevapjd1-p5-public.model-t.cc.commerce.ondemand.com/?site=electronics&asm=true" + window.location.search;

    // @Input()
    url: string = "https://accstorefront.cmja9gw7m-psdevapjd1-p5-public.model-t.cc.commerce.ondemand.com/?site=electronics" + window.location.search.replace("?","&");
    urlSafe: SafeResourceUrl;

    constructor(public sanitizer: DomSanitizer) { }

    ngOnInit() {
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
}
