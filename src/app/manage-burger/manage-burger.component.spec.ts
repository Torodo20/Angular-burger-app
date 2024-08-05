import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBurgerComponent } from './manage-burger.component';

describe('ManageBurgerComponent', () => {
  let component: ManageBurgerComponent;
  let fixture: ComponentFixture<ManageBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBurgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
