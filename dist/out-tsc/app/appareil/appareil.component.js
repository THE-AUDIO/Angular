import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let AppareilComponent = class AppareilComponent {
    constructor(appareilsService) {
        this.appareilsService = appareilsService;
    }
    ngOnInit() {
    }
    getStatus() {
        return this.appareilsStatus;
    }
    getColor() {
        if (this.appareilsStatus === 'éteint') {
            return 'red';
        }
        else {
            return 'green';
        }
    }
    onSwitchOne() {
        this.appareilsService.switchOnOne(this.indexOfAppreil);
    }
    OffSwitchOne() {
        this.appareilsService.switchOfOne(this.indexOfAppreil);
    }
};
__decorate([
    Input()
], AppareilComponent.prototype, "appareilsName", void 0);
__decorate([
    Input()
], AppareilComponent.prototype, "appareilsStatus", void 0);
__decorate([
    Input()
], AppareilComponent.prototype, "indexOfAppreil", void 0);
AppareilComponent = __decorate([
    Component({
        selector: 'app-appareil',
        templateUrl: './appareil.component.html',
        styleUrls: ['./appareil.component.scss']
    })
], AppareilComponent);
//# sourceMappingURL=appareil.component.js.map