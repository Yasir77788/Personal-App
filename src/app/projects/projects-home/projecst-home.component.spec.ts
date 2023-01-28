import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecstHomeComponent } from './projecst-home.component';

describe('ProjecstHomeComponent', () => {
  let component: ProjecstHomeComponent;
  let fixture: ComponentFixture<ProjecstHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecstHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjecstHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
