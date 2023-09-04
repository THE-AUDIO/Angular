import { TestBed } from '@angular/core/testing';
import { AppareilComponent } from './appareil.component';
describe('AppareilComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppareilComponent]
        });
        fixture = TestBed.createComponent(AppareilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=appareil.component.spec.js.map