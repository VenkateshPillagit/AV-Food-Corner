import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomponentsComponent } from './childcomponents.component';

describe('ChildcomponentsComponent', () => {
  let component: ChildcomponentsComponent;
  let fixture: ComponentFixture<ChildcomponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcomponentsComponent]
    });
    fixture = TestBed.createComponent(ChildcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
