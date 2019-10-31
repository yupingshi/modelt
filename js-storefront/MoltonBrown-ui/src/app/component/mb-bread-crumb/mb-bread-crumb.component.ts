import { Component, OnChanges,Input, SimpleChange } from '@angular/core';
import {SingletonService} from '../../services/singleton.service';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mb-bread-crumb',
  templateUrl: './mb-bread-crumb.component.html',
  styleUrls: ['./mb-bread-crumb.component.scss']
})
export class MbBreadCrumbComponent implements OnChanges {
  @Input() breadcrumb:Array<any>;
  public routerLinkVariable = "/store";
  listData:any;
  @Input() menuData:any;
    constructor(
      public singletonServ:SingletonService,
      public titleService:Title,
      public location: Location,
      public router: Router,
      public route :ActivatedRoute) { }
  
    ngOnInit() {
    }
    ngOnChanges(changes: { [propKey: string]: SimpleChange })  {  
      if (changes['breadcrumb']['currentValue']){
        if (changes['breadcrumb']['currentValue'] != undefined){
         this.listData=changes['breadcrumb']['currentValue'];
        }
      }
    }
    onbreadcrumbClick(event,data){
      event.stopPropagation();
      if(window.location.pathname.slice(1).split('/').length==3||window.location.pathname.slice(1).split('/').length==4){
      
      }else{
        this.singletonServ.menudata=this.menuData;
      }
      if(!data.product){
        if(data.categoryDisplayName){
          let url ='/store'+data.url.replace('/c/','/');
          this.titleService.setTitle(data.titleName);
          this.router.navigate([url]);      
        }
     }
    }
    goToHome(){
      this.router.navigate(['store']);
    }
}
