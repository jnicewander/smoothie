import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCard2Component } from './theme-card2.component';

describe('ThemeCard2Component', () => {
  let component: ThemeCard2Component;
  let fixture: ComponentFixture<ThemeCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
