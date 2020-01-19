import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps4PageComponent } from './ps4-page.component';

describe('Ps4PageComponent', () => {
  let component: Ps4PageComponent;
  let fixture: ComponentFixture<Ps4PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps4PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
