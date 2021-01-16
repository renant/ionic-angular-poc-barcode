import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
  providers: [
    BarcodeScanner
  ]
})
export class HomeModule { }
