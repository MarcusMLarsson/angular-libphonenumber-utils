import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneUtilsComponent } from './phone-utils.component';

describe('PhoneUtilsComponent', () => {
  let component: PhoneUtilsComponent;
  let fixture: ComponentFixture<PhoneUtilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneUtilsComponent]
    });
    fixture = TestBed.createComponent(PhoneUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
