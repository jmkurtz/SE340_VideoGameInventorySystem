import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoPageComponent } from './nintendo-page.component';

describe('NintendoPageComponent', () => {
  let component: NintendoPageComponent;
  let fixture: ComponentFixture<NintendoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NintendoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NintendoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
