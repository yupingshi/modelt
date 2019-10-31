import {
  Component,
  SimpleChange,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-delivery-instructions",
  templateUrl: "./delivery-instructions.component.html",
  styleUrls: ["./delivery-instructions.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInstructionsComponent implements OnInit, OnChanges {
  @Input() deliveryResctrictions;
  @Input() dlInstructionShowUp: boolean;
  deliveryBoxStatus: boolean;
  constructor() {
    this.deliveryBoxStatus = false;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that = this;
    if (changes["dlInstructionShowUp"]) {
      if (changes["dlInstructionShowUp"]["currentValue"] != undefined) {
        that.deliveryBoxStatus = true;
      }
    }
  }
  ngOnInit() {}
  onDeliveryClick() {
    this.deliveryBoxStatus = !this.deliveryBoxStatus;
  }
}
