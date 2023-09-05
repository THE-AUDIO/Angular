import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay, map, take, tap } from "rxjs";
import { DeviceModel } from "../models/device.model";
import { environment } from "src/environments/environment";

@Injectable()
export class DevicesService {

    private _loading$ = new BehaviorSubject<boolean>(false);
    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    private _devices$ = new BehaviorSubject<DeviceModel[]>([]);
    get devices$(): Observable<DeviceModel[]> {
        return this._devices$.asObservable();
    }

    constructor(
        private http: HttpClient
    ) {}

    private setLoading(status: boolean) {
        this._loading$.next(status);
    }
    
    getDevices(): void {
        this.setLoading(true);
        this.http.get<DeviceModel[]>(`${environment.apiUrl}/assets/data.json`, 
            { responseType: 'json' }
        ).pipe(
            tap(response => {
                this._devices$.next(response);
                this.setLoading(false);
            })
        ).subscribe();
    }

    updateDeviceStatus(deviceId: number): void {
        this.devices$.pipe(
            take(1),
            delay(131),
            map(devices => devices
                .map(device => device.id === deviceId ? (
                    {
                        ...device,
                        status: device.status === "on" ? "off" : "on"
                    }
                ) as DeviceModel: device)),
            tap(response => this._devices$.next(response))
        ).subscribe();
    }
}
