import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareslideComponent } from './squareslide.component';

describe('SquareslideComponent', () => {
  let component: SquareslideComponent;
  let fixture: ComponentFixture<SquareslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareslideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
