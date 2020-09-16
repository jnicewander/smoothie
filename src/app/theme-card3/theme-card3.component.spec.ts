import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCard3Component } from './theme-card3.component';

describe('ThemeCard3Component', () => {
  let component: ThemeCard3Component;
  let fixture: ComponentFixture<ThemeCard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
