import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceModel } from '../../models/device.model';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesComponent implements OnInit {

  loading$!: Observable<boolean>;
  devices$!: Observable<DeviceModel[]>;

  constructor(
    private devicesService: DevicesService
  ) {}

  ngOnInit(): void {
    this.initObservables();
    this.devicesService.getDevices();
  }

  private initObservables(): void {
    this.loading$ = this.devicesService.loading$;
    this.devices$ = this.devicesService.devices$;
  }
}
