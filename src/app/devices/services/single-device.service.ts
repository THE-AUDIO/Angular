import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { DeviceModel } from "../models/device.model";
import { environment } from "src/environments/environment";

@Injectable()
export class SingleDevicesService {

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
    
    getSingleDevice(deviceId: number): void {
        this.setLoading(true);
        this.http.get<DeviceModel[]>(`${environment.apiUrl}/assets/data.json`, 
            { responseType: 'json' }
        ).pipe(
            map(response => response.filter(device => device.id === deviceId)),
            tap(response => {
                this._devices$.next(response);
                this.setLoading(false);
            })
        ).subscribe();
    }
}
