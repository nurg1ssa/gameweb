import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTwoComponent } from './for-two.component';

describe('ForTwoComponent', () => {
  let component: ForTwoComponent;
  let fixture: ComponentFixture<ForTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
