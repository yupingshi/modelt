import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit {

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
