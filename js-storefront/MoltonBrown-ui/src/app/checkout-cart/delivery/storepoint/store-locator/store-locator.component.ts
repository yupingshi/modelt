import { Component, OnInit,Input,Output,EventEmitter,OnChanges,SimpleChange  } from '@angular/core';
import { SingletonService } from "../../../../services/singleton.service";
import { StorePointComponentService } from "../storepoint.service";
@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.scss']
})
export class StoreLocatorComponent implements OnInit,OnChanges {
  public zoom: number;  
  @Input() openHourWindow:any;
  @Input() storePoints:any;
  @Output() emitselectedStore: EventEmitter<any> = new EventEmitter<any>();
  stores:Array<any>;
  openedWindow:number;
  geoPoint:any;
  longitude:number;
  latitude:number;
  constructor(
    public singletonServ:SingletonService,
    public storeServ:StorePointComponentService
    ) {
     this.latitude=singletonServ.catalogVersion.geoPoint.latitude;
     this.longitude=singletonServ.catalogVersion.geoPoint.longitude;
     }
  ngOnChanges(changes: { [propKey: string]: SimpleChange })  {
    const that =this;
    if (changes['storePoints']){
      if (changes['storePoints']['currentValue'] != undefined){
        let _strorePoints =changes['storePoints']['currentValue'];
       let _st= _strorePoints.filter(_obj => {
          return _obj.geoPoint
        });
        this.stores=_st;
        if(_st.length!=0){
          this.latitude=_st[0].geoPoint.latitude;
          this.longitude=_st[0].geoPoint.longitude;
        }
        if (changes['openHourWindow']){
          if (changes['openHourWindow']['currentValue'] != undefined){
            const id=changes['openHourWindow']['currentValue']['address']['id'];
            that.stores.map((obj,i)=>{
              if(obj['address']['id']==id){
               that.openedWindow = id; 
               obj['open']=true;
              }else{
                obj['open']=false;
               }
            })
          }
        }
      }
    }

  }
  openWindow(id) {
    const that=this;
    that.openedWindow = id; 
    this.stores.map((obj,i)=>{
      if(i==id){
       that.openedWindow = id; 
       obj['open']=true;
      }else{
        obj['open']=false;
       }
    })
}
closePopup(){
  this.stores.map((obj,i)=>{
     obj['open']=false;
  })
}
isInfoWindowOpen(id) {
    return this.openedWindow == id; 
}
  ngOnInit() {
    this.zoom = 12;
    this.geoPoint=this.singletonServ.catalogVersion.geoPoint;
  }
  onSelectStore(event, data) {
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion;
    const _obj = {
      clickCollect:true,
      selectedStore: data
    };   
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.setStore(user.token,user.email,user.code,data,_obj);
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.setStore(_guest.token,'anonymous',_guest.guid,data,_obj);
      }
    }
  }


  setStore(token,email,code,data,_obj){
    
    this.storeServ.setStore(token,email,code,data).subscribe((response)=>{
      this.singletonServ.sendMessage(_obj);
      this.emitselectedStore.emit(_obj);
    },err=>{
      this.emitselectedStore.emit(_obj);
    })
  }
  getGeoPointLt(){
    if(this.stores){
    if(this.stores.length !=0){
      return this.stores[0]['latitude'];
    }else{
     return this.geoPoint.latitude;
    }
   }else{

     return this.geoPoint.latitude;
   }
   return this.geoPoint.latitude;
  }
  getGeoPointLg(){
    if(this.stores){
      if(this.stores.length !=0){
       return this.stores[0]['longitude'];
     }else{
      return this.geoPoint.longitude;
     }
   }else{
      return this.geoPoint.longitude;
    }
    return this.geoPoint.longitude;
  }
  
}
