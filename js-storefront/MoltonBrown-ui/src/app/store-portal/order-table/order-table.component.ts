import { Component, OnInit, Input, OnChanges,SimpleChange, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit,OnChanges {
@Input() orders:any;
@Input() storesList:any;
@Input() odTableTableType:any;
@Output() onOrderDispactch : EventEmitter<any> = new EventEmitter<any>();
@Output() onBulkOrderDispactch : EventEmitter<any> = new EventEmitter<any>();
orderData:any;
stores:any;
  constructor() {
   }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that=this;
    if(changes['storesList']){
      if (changes["storesList"]["currentValue"] != undefined) {
        that.stores=changes["storesList"]["currentValue"];  
      }
    }
    if(changes['odTableTableType']){
      if (changes["odTableTableType"]["currentValue"] != undefined) {
          const _odtype= changes["odTableTableType"]["currentValue"];

          if(_odtype == "dispatch" ) {
                this.orderData={
                  switchStatus:'dispatch',
                  serialNo:'S No',
                  select:true,
                  orderNumber:'Order Number',
                  customerName:'Customer Name',
                  orderDate:'Order Date',
                  amount:'Value',
                  action:'Action'
                }
            } else if(_odtype == "collected"){
                this.orderData={
                  switchStatus:'collected',
                  serialNo:'S No',
                  select:false,
                  orderNumber:'Order Number',
                  customerName:'Customer Name',
                  orderDate:'Order Date',
                  amount:'Value',
                  action:'Action'
                }
            }else if( _odtype == "cancelled") {
                this.orderData={
                  switchStatus:'orderStatus',
                  serialNo:'S No',
                  select:false,
                  orderNumber:'Order Number',
                  customerName:'Customer Name',
                  orderDate:'Order Date',
                  amount:'Value',
                  action:'Status'
                }
            }else if( _odtype == "collectedOrder") {
                this.orderData={
                  switchStatus:'orderStatus',
                  serialNo:'S No',
                  select:false,
                  orderNumber:'Order Number',
                  customerName:'Customer Name',
                  orderDate:'Order Date',
                  amount:'Value'
                }
      }
   }
  }
}
  ngOnInit() {
  }
  onCheckOrder(event,order,k){
    this.stores.map((obj:any,i)=>{
      if(i==k){
        obj.checked = !obj.checked;
      }else{
        obj.checked=false;
      }
    });
  }
  onBulkCheck(event){
    const _checkStats =this.stores.filter((obj:any)=>{
      return obj.checked
    });
    if(_checkStats.length !=0){
      let    _codes=_checkStats.map(function(obj){return obj.code})
      const _body=  {
        "orders":_codes
    }
    this.onOrderDispactch.emit(_body);
    }
  }
  onDispactchOrder(event,order){
    let _body=  {
      "orders":[order.code]
  }
    this.onOrderDispactch.emit(_body);
  }
}
