import { TestBed } from '@angular/core/testing';
import { AppareilViewComponent } from './appareil-view.component';
describe('AppareilViewComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppareilViewComponent]
        });
        fixture = TestBed.createComponent(AppareilViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=appareil-view.component.spec.js.map