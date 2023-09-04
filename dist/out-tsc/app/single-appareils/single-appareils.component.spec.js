import { TestBed } from '@angular/core/testing';
import { SingleAppareilsComponent } from './single-appareils.component';
describe('SingleAppareilsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SingleAppareilsComponent]
        });
        fixture = TestBed.createComponent(SingleAppareilsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=single-appareils.component.spec.js.map