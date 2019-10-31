import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnChanges,
  SimpleChange
} from "@angular/core";
import * as _ from "lodash";
import { SingletonService } from "../../services/singleton.service";
import {
  trigger, 
  transition, 
  state, 
  animate, 
  style, 
  AnimationEvent 
 } from '@angular/animations';
@Component({
  selector: "app-filter",
  animations: [
    trigger('openClose', [
      state('open', style({
         display:'block',
         height: 'auto',
         visibility: 'visible',
         animationDuration: '1s',
         animationDelay: '1s',
         maxHeight: '175px'
      })),
      state('closed', style({
        display:'none',
        height: '0px',
        visibility: 'hidden',
        maxHeight: '0px',
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
        animate('1s')
      ]),
      transition('open <=> closed', [
        animate('1s')
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ])
  ],
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit, OnChanges {
  @ViewChild("facetTag") facetValue: ElementRef;
  @Input() modal: boolean;
  @Input() openFacet: boolean;
  @Input() searchDisplay: boolean;
  @Input() searchPrdId: string;
  @Output() clearAll: EventEmitter<any> = new EventEmitter<any>();
  @Output() refetchProducts: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearParams: EventEmitter<any> = new EventEmitter<any>();
  @Input() facetResponse: any;
  @Input() logging = false;
  checkListId:any;
  checkedData: any = [];
  facets: any;
  checkList: boolean = false;
  showFacets: boolean;
  checkedCount: number;
  paths: string;
  mbFacet: boolean;
  refinePath: string;
  IsmodelShow: boolean;
  refineFacets: Array<any>;
  checkedfilter: boolean;
  sortId: number;
  siteSpecific: boolean;
  taponCleartapped:boolean;
  copyFacets:any;
  constructor(public singletonServ: SingletonService) {
    this.checkedCount = 1;
    this.refinePath = "";
    this.IsmodelShow = false;
    this.mbFacet = true;
  }

  ngOnInit() {
    const that = this;
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      if (baseSite.isoCode == "DE") {
        that.siteSpecific = false;
      } else {
        that.siteSpecific = true;
      }
    }
    this.singletonServ.getMessage().subscribe(message => {
      if (message.openFacets) {
        that.onShowFilters();
      }
    });
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that = this;
    if (changes["facetResponse"]) {
      if (changes["facetResponse"]["currentValue"] != undefined) {
        const _currentVal = changes["facetResponse"]["currentValue"];
        const _previousVal = changes["facetResponse"]["currentValue"];
        that.renderFacets(_currentVal.status, _currentVal.facets);
      }
    }
  }
  renderFacets(status, resp) {
    if(resp){
    const that = this;
    let facets = resp;
    let checkFilterStatus = false;
    if (this.facetValue) {
      if (
        this.facetValue.nativeElement.querySelector(
          "input[type=checkbox]:checked"
        )
      ) {
        checkFilterStatus = true;
      }
    }
    if (status) {
      resp.map((obj)=>{       
        obj['values'].sort((a,b)=>{
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        });
    
      });
      this.facets = resp;
    } else {
      if(that.facets){
      _.map(that.facets, (obj) => {
        obj["values"].map(item => {
          if (!item.selected) {
            item["disable"] = true;
          }else {
            obj.open=true;
          }
        });
      });
    }

      _.map(facets, function(value, i) {
        const facetValue = _.filter(that.facets, (item, p) => {
          return item.name == value.name;
        });
        if (facetValue) {
          facetValue.map(obj => {
            obj.values.map((val, k) => {
              const data = _.find(facets[i]["values"], item => {
                return item.name == val.name;
              });
              if (data) {
                obj["values"][k]["count"] = data["count"];
                obj["values"][k]["disable"] = false;
                obj["values"][k]["name"] = data.name;
              } else {
                val["disable"] = true;
                if (that.checkedData.length == 1) {
                  if (obj.name == that.checkedData[0]) {
                    obj["values"][k]["disable"] = false;
                  }
                }
              }
            });
          });
        }
      });
      this.facets =facets;
    }
    // _.map(this.facets, (obj) => {
    //   obj["values"].map(item => {
    //     if (item.selected) {
    //       obj.open=true;
    //     }
    //   });
    // });
    console.log(this.facets );
  }
}

  onClearAll() {
    this.checkList = false;
    this.showFacets = true;
    const obj = {
      clear: true
    };
    this.clearParams.emit(obj);
  }
  onFacetClicked(filterData, sortId) {
    this.facets[sortId]["checked"] = !this.facets[sortId]["checked"];
    this.facets[sortId]["open"] = !this.facets[sortId]["open"];
  }


  onShowFilters() {
    this.refinePath = "";
    this.mbFacet = true;
    this.refineFacets = [];
    this.checkedfilter = false;
    this.IsmodelShow = true;
    this.showFacets = true;
    // if(this.checkList){
      this.checkList = false;
    // }
  }
  onRefineitem(data, sortID) {
    this.sortId = sortID;
    this.refinePath = data.name;
    this.mbFacet = !this.mbFacet;
    this.IsmodelShow = !this.IsmodelShow;
    this.refineFacets = data.values;
    this.checkedfilter = true;
    this.checkList = false;
    this.showFacets = false;
  }
  onResetFilters(event){
    let evnt ={'target':{'checked':false}};
    evnt['checked']=false;
    const sortId = this.sortId;
    if(this.checkListId){
      this.onSortByFacets(evnt, sortId, this.checkListId);
    }
    if(this.taponCleartapped){
      this.facets=this.copyFacets;
      this.taponCleartapped=false;
    }
    this.refinePath = "";
    this.mbFacet = true;
    this.refineFacets = [];
    this.checkedfilter = false;
    this.IsmodelShow = true;
    this.showFacets = false;
    this.checkList = false;
  }
  updateFilterData(event, i) {
    this.checkListId=i;
    const sortId = this.sortId;
    this.onSortByFacets(event, sortId, i);
    this.checkList = false;
    this.checkedfilter = true;
  }
  onCheckListDone() {
    if(this.taponCleartapped){
      this.onResetFilterCatValues();
    }
    this.refinePath = "";
    this.mbFacet = !this.mbFacet;
    this.refineFacets = [];
    this.checkedfilter = false;
    this.IsmodelShow = true;
    this.showFacets = false;
    this.checkList = true;
    this.checkListId=undefined;
  }
  ontapApplyFacets() {
    this.IsmodelShow = !this.IsmodelShow;
    this.mbFacet = !this.mbFacet;
  }
  ontapClear(event) {
    this.copyFacets=JSON.parse(JSON.stringify(this.facets));
    this.taponCleartapped=true;
    const sortId = this.sortId;
    const _checkFilter = this.facets[sortId]["values"].filter((obj:any)=>{
      obj['selected']=false;
    });

   if(_checkFilter.length !=0){
       this.facets[sortId]["values"].map((obj:any)=>{
          obj['selected']=false;
       });
   }
  }
onResetFilterCatValues(){
  const checkedData=[];
  const sortId = this.sortId;
  const _checkFilter = this.facets[sortId]["values"].filter((obj:any)=>{
    obj['selected']=false;
  });

 if(_checkFilter.length !=0){
  _.map(this.facets, obj => {
    _.map(obj.values, item => {
      if (item.selected) {
        let b = ":relevance:";
        let id =
          item["query"]["query"]["value"].lastIndexOf(":relevance:") +
          b.length;
        let facetQuery =
          ":" +
          item["query"]["query"]["value"].substring(
            id,
            item["query"]["query"]["value"].length
          );
        checkedData.push(facetQuery);
      } else {
        this.checkedCount = this.checkedCount - 1;
      }
    });
  });
  this.checkedData = _.uniq(checkedData);
  const id = this.checkedData.join("");
  const _serchId = {
    id: id
  };
  this.taponCleartapped=false;
  this.refetchProducts.emit(_serchId);
}
}
  onSortByFacets(event, sortId, i) {
    const that = this;
    let checkFilterStatus = false;
    this.checkList = true;
    if (
      this.facetValue.nativeElement.querySelector(
        "input[type=checkbox]:checked"
      )
    ) {
      checkFilterStatus = true;
    }
    this.paths = "";
    const checkedData = [];
    if (event.target.checked) {
      that.facets[sortId]["checked"] = true;
      that.facets[sortId]["values"][i]["selected"] = true;
      _.map(that.facets, obj => {
        _.map(obj.values, item => {
          if (item.selected) {
            that.checkedCount = that.checkedCount + 1;
            let b = ":relevance:";
            let id =
              item["query"]["query"]["value"].lastIndexOf(":relevance:") +
              b.length;
            let facetQuery =
              ":" +
              item["query"]["query"]["value"].substring(
                id,
                item["query"]["query"]["value"].length
              );
            checkedData.push(facetQuery);
          }
        });
      });

      this.checkedData = _.uniq(checkedData);
      const id = this.checkedData.join("");
      const _serchId = {
        id: id
      };
      that.refetchProducts.emit(_serchId);
    } else {
      that.facets[sortId]["checked"] = false;
      this.facets[sortId]["values"][i]["selected"] = false;

      _.map(that.facets, obj => {
        _.map(obj.values, item => {
          if (item.selected) {
            let b = ":relevance:";
            let id =
              item["query"]["query"]["value"].lastIndexOf(":relevance:") +
              b.length;
            let facetQuery =
              ":" +
              item["query"]["query"]["value"].substring(
                id,
                item["query"]["query"]["value"].length
              );
            checkedData.push(facetQuery);
          } else {
            this.checkedCount = this.checkedCount - 1;
          }
        });
      });

      this.checkedData = _.uniq(checkedData);
      const id = this.checkedData.join("");
      const _serchId = {
        id: id
      };
      
      that.refetchProducts.emit(_serchId);
    }
  }
  onAnimationEvent ( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
  }
}
