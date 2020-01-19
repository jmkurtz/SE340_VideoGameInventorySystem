import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxPageComponent } from './xbox-page.component';

describe('XboxPageComponent', () => {
  let component: XboxPageComponent;
  let fixture: ComponentFixture<XboxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XboxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
