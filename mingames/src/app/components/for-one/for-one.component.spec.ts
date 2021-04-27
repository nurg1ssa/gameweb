import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOneComponent } from './for-one.component';

describe('ForOneComponent', () => {
  let component: ForOneComponent;
  let fixture: ComponentFixture<ForOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
