import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  Output,
  EventEmitter
} from "@angular/core";
import { SingletonService } from "../../../../services/singleton.service";
import { StorePointComponentService } from "../storepoint.service";
@Component({
  selector: "app-collection-list",
  templateUrl: "./collection-list.component.html",
  styleUrls: ["./collection-list.component.scss"]
})
export class CollectionListComponent implements OnInit, OnChanges {
  @Input() storeList: any;
  @Output() emitselectedStore: EventEmitter<any> = new EventEmitter<any>();
  @Output() showMapsOpenHour: EventEmitter<any> = new EventEmitter<any>();  
  stores: Array<any> = [];
  constructor(
    public singletonServ: SingletonService,
    public storeServ: StorePointComponentService
  ) {}

  ngOnInit() {}
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes["storeList"]) {
      if (changes["storeList"]["currentValue"] != undefined) {
      }
    }
  }
  onSelectStore(event, data) {
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion;
    const _obj = {
      clickCollect:true,
      selectedStore: data
    };
    this.singletonServ.sendMessage({overlay:true});
    const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
    if (this.singletonServ.getStoreData(baseSite.reg)) {
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
      this.singletonServ.sendMessage({overlay:false});
    })
  }
  onShowMapHours(data){
 this.showMapsOpenHour.emit(data);
  }
}
