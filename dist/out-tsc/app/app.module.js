import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilsService } from './service/appreils.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { SingleAppareilsComponent } from './single-appareils/single-appareils.component';
const appRoutes = [
    { path: 'appareils', component: AppareilViewComponent },
    { path: 'auth', component: AuthComponent },
    { path: '', component: AppareilViewComponent },
    { path: 'appareils/:id', component: SingleAppareilsComponent }
];
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            MonPremierComponent,
            AppareilComponent,
            AuthComponent,
            AppareilViewComponent,
            SingleAppareilsComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            RouterModule.forRoot(appRoutes)
        ],
        providers: [
            AppareilsService,
            AuthService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map