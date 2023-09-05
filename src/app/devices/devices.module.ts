import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './components/devices/devices.component';
import { SingleDeviceComponent } from './components/single-device/single-device.component';
import { ViewDeviceComponent } from './components/view-device/view-device.component';
import { DevicesService } from './services/devices.service';
import { SharedModule } from '../shared/shared.module';
import { SingleDevicesService } from './services/single-device.service';


@NgModule({
  declarations: [
    DevicesComponent,
    SingleDeviceComponent,
    ViewDeviceComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    SharedModule
  ],
  providers: [
    DevicesService,
    SingleDevicesService
  ]
})
export class DevicesModule { }
