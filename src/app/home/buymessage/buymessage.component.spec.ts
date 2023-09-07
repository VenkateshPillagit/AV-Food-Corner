import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuymessageComponent } from './buymessage.component';

describe('BuymessageComponent', () => {
  let component: BuymessageComponent;
  let fixture: ComponentFixture<BuymessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuymessageComponent]
    });
    fixture = TestBed.createComponent(BuymessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
