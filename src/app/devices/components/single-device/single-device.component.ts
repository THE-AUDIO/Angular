import { Component, OnInit } from '@angular/core';
import { SingleDevicesService } from '../../services/single-device.service';
import { Observable } from 'rxjs';
import { DeviceModel } from '../../models/device.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  deviceId!: number;
  device$!: Observable<DeviceModel[]>

  constructor(
    private activatedRoute: ActivatedRoute,
    private singleDeviceService: SingleDevicesService
  ) {}

  ngOnInit(): void {
    this.deviceId = +this.activatedRoute.snapshot.params['id'];
    this.device$ = this.singleDeviceService.devices$;
    this.singleDeviceService.getSingleDevice(this.deviceId);
  }
}
