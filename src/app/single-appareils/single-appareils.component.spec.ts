import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppareilsComponent } from './single-appareils.component';

describe('SingleAppareilsComponent', () => {
  let component: SingleAppareilsComponent;
  let fixture: ComponentFixture<SingleAppareilsComponent>;

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
