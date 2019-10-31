import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';
import { FooterComponentService } from "./footer.service";
import { SingletonService } from "../../services/singleton.service";
import {Router} from '@angular/router';
import { TranslateService } from "../../translate.service";
import {
   trigger, 
   transition, 
   state, 
   animate, 
   style, 
   AnimationEvent 
  } from '@angular/animations';

@Component({
  selector: 'app-footer',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        display: 'block',
        visibility: 'visible',
         animationDuration: '1s',
         animationDelay: '1s',
         maxHeight: '175px'
      })),
      state('closed', style({
        display: 'none',
        visibility: 'hidden',
        maxHeight: '0px',
        opacity: 0,
        animationDuration: '1s',
        animationDelay: '1s'
       })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ])
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  
  @Input() logging = false;
  mbPoliciesData: Array<any>;
  mbfooterData: Array<any>;
  toggleFooter: boolean;
  footerLinks:Array<any>;
  isVisible:boolean;
  isOpen = true;

  constructor(public router: Router,
    public footerServ: FooterComponentService,
    private translate: TranslateService,
    public singletonServ: SingletonService) {
    this.toggleFooter = true;
  }
  routePAth(data){
      if(data.org){
        if(data.childroute){
          const route=data.templateName;
          const childRouteName=data.childRouteName;
          const _url = '/store/'+route+'/'+childRouteName;
          return _url;
        }else{
          this.router.navigate(['store',data.templateName]);
          const _url = '/store/'+data.templateName;
          return _url;
        }
  
      }else{
        if(data.routePDF){
           window.location.href=data.routePDF;
        }
        if(data.routename){
         const _url ='/store/'+data.routename
          return  _url;
      }
  }
}
  onFooterCntntClick(data){
    if(data.org){
      if(data.childroute){
        const route=data.templateName;
        const childRouteName=data.childRouteName;
        this.router.navigate(['store',route,childRouteName]);
      }else{
        this.router.navigate(['store',data.templateName]);
      }

    }else{
      if(data.routePDF){
         window.location.href=data.routePDF;
      }
      if(data.routename){
      this.router.navigate(['store',data.routename]);
    }
    }
   this.onCancelToggleFooter();
}
setLang(lang: string) {
  this.translate.use(lang);
}
  ngOnInit() {
    const baseSite =this.singletonServ.catalogVersion;
    if(baseSite){
      this.setLang(baseSite.lngCode);
      this.getStaticCntnt(baseSite.lngCode);
    }
  }
  onfooterToggle(data, k) {
    if(data.data){
    this.mbfooterData = data.data;
    this.mbPoliciesData.map((obj,id)=>{
      if(id==k){
        obj.active = true;
      }else{
        obj.active =false;
      }
    }); 
    this.toggleFooter = false;
  }else{
     this.mbPoliciesData.map((obj,id)=>{
       obj.active = false;     
     });
    this.toggleFooter = true;
    this.router.navigate(['store',data.templateName]);
  }
}
getRouterPath(data) {
  if(data.data){
}else{
   this.mbPoliciesData.map((obj,id)=>{
     obj.active = false;     
   });
  this.toggleFooter = true;
const url ='store/'+data.templateName;
return url;
}
}
  onCancelToggleFooter() {
    this.mbPoliciesData.map((obj,id)=>{
        obj.active = false;     
    });
    this.toggleFooter = true;
  }
  getStaticCntnt(lang: string){
    this.footerServ.getStaticContent(lang).subscribe((response)=>{
      this.mbPoliciesData=response['moltonBrownPolicies'];
      this.footerLinks=response['footers'];
    });
  }
  getSubRouterPath(data){
    if(data.org){
      if(data.childroute){
        const route=data.templateName;
        const childRouteName=data.childRouteName;
       const url= 'store/'+route+'/'+childRouteName
      return url;
      }else{
        const url= 'store/'+data.templateName
        return url;
      }

    }
  }
  onShowPromotionalCntnt(data){
    this.router.navigate(data.route);
  }
  
  onAnimationEvent ( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
  }
}
