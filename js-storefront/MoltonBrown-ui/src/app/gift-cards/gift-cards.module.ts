
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeviceDetectorModule } from "ngx-device-detector";
import {GiftCardsComponent} from './gift-cards.component';
import { GiftCardDetailsComponent } from './gift-card-details/gift-card-details.component';
import { BalanceStatementComponent } from './balance-statement/balance-statement.component';
import {CardRecoveryComponent} from './card-recovery/card-recovery.component';
import {TransferBalanceComponent} from './transfer-balance/transfer-balance.component';
import {CardregistrationComponent} from './cardregistration/cardregistration.component';
import {TranslatServicePipeModule} from '../pipe/transalte.module';
import {MbBreadCrumbModule} from '../component/mb-bread-crumb/mb-bread-crumb.module';
import { RecaptchaModule } from 'ng-recaptcha';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
    {
        path: '', component: GiftCardsComponent, 
        children: [
        { path: '', redirectTo: 'check-balance', pathMatch: 'full' },
        { path: 'check-balance', component: GiftCardDetailsComponent},
        {path:'balanceStatement',component:BalanceStatementComponent},
        {path:'protected/registerCard',component:CardregistrationComponent},
        {path:'protected/transferBalance',component:TransferBalanceComponent},
        {path:'protected/reportLostStolenCards',component:CardRecoveryComponent}
    ]
}];

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        DeviceDetectorModule,
        ReactiveFormsModule,
        TranslatServicePipeModule,
        MbBreadCrumbModule,
        RecaptchaModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        GiftCardsComponent,
        GiftCardDetailsComponent,
        BalanceStatementComponent,
        CardRecoveryComponent,
        TransferBalanceComponent,
        CardregistrationComponent
    ],
    providers:[]
})
export class GiftCardRouteModule { }
