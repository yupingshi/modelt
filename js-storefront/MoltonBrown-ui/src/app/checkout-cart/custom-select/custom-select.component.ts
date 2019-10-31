import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
@Input() countries:any;
select:string;
  constructor() {
    this.select= "Please select a country";
   }

  ngOnInit() {
  }

}
