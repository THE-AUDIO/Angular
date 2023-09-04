import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let AuthComponent = class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.AuthStatus = this.authService.isAuth;
    }
    onSignIn() {
        this.authService.signIn().then(() => {
            this.router.navigate(['appareils']);
            this.AuthStatus = this.authService.isAuth;
        });
    }
    onSignOut() {
        this.authService.signUp();
        this.AuthStatus = this.authService.isAuth;
    }
};
AuthComponent = __decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.scss']
    })
], AuthComponent);
//# sourceMappingURL=auth.component.js.map