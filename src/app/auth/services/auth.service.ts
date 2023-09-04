import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, delay, of, tap } from "rxjs";
import { AuthModel } from "../models/auth.model";
import { SessionService } from "src/app/core/services/session.service";

@Injectable()
export class AuthService {

    private _loading$ = new BehaviorSubject<boolean>(false);
    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    private _unauthorized$ = new BehaviorSubject<boolean>(false);
    get unauthorized$(): Observable<boolean> {
        return this._unauthorized$.asObservable();
    }

    private _errorUnauthorized$ = new BehaviorSubject<string>("");
    get errorUnauthorized$(): Observable<string> {
        return this._errorUnauthorized$.asObservable();
    }

    constructor(
        private http: HttpClient,
        private router: Router,
        private sessionService: SessionService
    ) {}

    private setLoading(status: boolean) {
        this._loading$.next(status);
    }

    logIn(data: AuthModel): void {
        this.setLoading(true);
        of(data).pipe(
            delay(3000),
            tap(response => {
                if(response.identifiant === "the-audio" && response.password === "theaudio") {
                    this._unauthorized$.next(false);
                    this.sessionService.setToken("ehianatra_the_audio_token");
                    this.router.navigateByUrl("/devices");
                } else {
                    this._unauthorized$.next(true);
                    this._errorUnauthorized$.next("Identifiant et/ou Mot de passe incorrects...");
                }
                this.setLoading(false);
            })
        ).subscribe();
    }
}