import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './components/devices/devices.component';
import { ViewDeviceComponent } from './components/view-device/view-device.component';
import { SingleDeviceComponent } from './components/single-device/single-device.component';

const routes: Routes = [
  { path: "", component: DevicesComponent },
  { path: ":id", component: SingleDeviceComponent },
  { path: ":id/view", component: ViewDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
