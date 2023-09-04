import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let AppareilViewComponent = class AppareilViewComponent {
    constructor(appreilsService) {
        this.appreilsService = appreilsService;
        this.isAuth = false;
        this.lastUpdate = new Date;
        setTimeout(() => {
            this.isAuth = true;
        }, 4000);
    }
    ngOnInit() {
        this.appareils = this.appreilsService.appareils;
    }
    onAllumer() {
        this.appreilsService.switchOnAll();
    }
    ;
    onEteint() {
        this.appreilsService.switchOffAll();
    }
};
AppareilViewComponent = __decorate([
    Component({
        selector: 'app-appareil-view',
        templateUrl: './appareil-view.component.html',
        styleUrls: ['./appareil-view.component.scss']
    })
], AppareilViewComponent);
//# sourceMappingURL=appareil-view.component.js.map