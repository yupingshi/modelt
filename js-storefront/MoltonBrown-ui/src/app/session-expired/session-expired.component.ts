import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.scss']
})
export class SessionExpiredComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  onRouteTo(event,route){
    if(event.ctrlKey && event.which === 1){
      window.open(route); 
   }  else{
      const _path= route.slice(1);
      let _route =_path.split('/');
      this.router.navigate(_route);
    }
  }
}
