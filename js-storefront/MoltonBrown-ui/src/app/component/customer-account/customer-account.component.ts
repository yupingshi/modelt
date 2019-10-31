import { Component, OnInit } from "@angular/core";
import { SingletonService } from "../../services/singleton.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-customer-account",
  templateUrl: "./customer-account.component.html",
  styleUrls: ["./customer-account.component.scss"]
})
export class CustomerAccountComponent implements OnInit {
  breadcrumb: Array<any>;
  orgMenu:boolean;
  constructor(
    public singletonService: SingletonService,
    public location: Location,
    public titleService: Title,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.orgMenu=false;
  }

  ngOnInit() {
    this.titleService.setTitle('My Account | Molton Brown');
    this.breadcrumb=[{name:'MY ACCOUNT',route:'/store/myaccount/profile/detail'},{name:'MY PROFILE'}]
  }
  onContentClick(data) {
    if (data == "profile") {
      this.router.navigate(["store", "myaccount", "profile"]);
    } else if (data == "address") {
      this.router.navigate(["store", "myaccount", "profile", "addressBook"]);
    } else if (data == "payment") {
      this.router.navigate(["store", "myaccount", "profile", "paymentInfo"]);
    } else if (data == "favourites") {
      this.router.navigate(["store", "myaccount", "profile", "myFavorites"]);
    } else if (data == "history") {
      this.router.navigate(["store", "myaccount", "profile", "mbOrderhistory"]);
    }
  }
  onCollapseMenu(){
    if(this.orgMenu){
      this.orgMenu=false;
    }else{
      this.orgMenu=true;
    }
  }
}
