import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class SessionService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    setToken(token: string): void {
        localStorage.setItem("ehianatra", token);
    }

    getToken(): string | null {
        return localStorage.getItem("ehianatra");
    }

    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    async logOut(): Promise<void> {
        localStorage.removeItem("ehianatra");
        await this.router.navigateByUrl("/auth");
        window.location.reload();
    }
}