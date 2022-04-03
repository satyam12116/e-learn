import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAnimationComponent } from './body-animation.component';

describe('BodyAnimationComponent', () => {
  let component: BodyAnimationComponent;
  let fixture: ComponentFixture<BodyAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
