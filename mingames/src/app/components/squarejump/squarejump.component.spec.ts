import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarejumpComponent } from './squarejump.component';

describe('SquarejumpComponent', () => {
  let component: SquarejumpComponent;
  let fixture: ComponentFixture<SquarejumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquarejumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarejumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
