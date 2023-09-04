import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './components/devices/devices.component';
import { SingleDeviceComponent } from './components/single-device/single-device.component';
import { ViewDeviceComponent } from './components/view-device/view-device.component';
import { DevicesService } from './services/devices.service';


@NgModule({
  declarations: [
    DevicesComponent,
    SingleDeviceComponent,
    ViewDeviceComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule
  ],
  providers: [
    DevicesService
  ]
})
export class DevicesModule { }
