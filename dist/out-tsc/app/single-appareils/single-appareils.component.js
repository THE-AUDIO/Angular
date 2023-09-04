import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let SingleAppareilsComponent = class SingleAppareilsComponent {
    constructor(appareilsService, route) {
        this.appareilsService = appareilsService;
        this.route = route;
        this.name = 'appareils';
        this.status = 'allumé';
    }
    ngOnInit() {
        this.name = this.route.snapshot.params['id'];
    }
};
SingleAppareilsComponent = __decorate([
    Component({
        selector: 'app-single-appareils',
        templateUrl: './single-appareils.component.html',
        styleUrls: ['./single-appareils.component.scss']
    })
], SingleAppareilsComponent);
//# sourceMappingURL=single-appareils.component.js.map