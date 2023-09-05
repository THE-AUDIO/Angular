import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, combineLatest, map, startWith, tap } from 'rxjs';
import { DeviceModel } from '../../models/device.model';
import { DevicesService } from '../../services/devices.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesComponent implements OnInit {

  loading$!: Observable<boolean>;
  devices$!: Observable<DeviceModel[]>;
  deviceCtrl!: FormControl;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private devicesService: DevicesService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.devicesService.getDevices();
    this.initObservables();
  }

  private initForm(): void {
    this.deviceCtrl = this.formbuilder.control('');
  }

  private initObservables(): void {
    this.loading$ = this.devicesService.loading$;

    const filter$= this.deviceCtrl.valueChanges.pipe(
      startWith(this.deviceCtrl.value),
      map((deviceName: string) => deviceName.toLowerCase().trim())
    );
    
    this.devices$ = combineLatest([
      filter$, this.devicesService.devices$
    ]).pipe(
      map(([filter, devices]) => devices.filter(
        device => device.name.toLowerCase().trim().includes(filter)))
    );
  }

  getStatus(status: "on" | "off"): boolean {
    return status === "on";
  }

  getColor(status: "on" | "off"): string {
    return status === "on" ? "green" : "red";
  }

  onSwitchOne(device: DeviceModel) {
    this.devicesService.updateDeviceStatus(device.id);
  }

  onNavigateToSingle(device: DeviceModel): void {
    this.router.navigateByUrl(`/devices/${device.id}`)
  }
}
