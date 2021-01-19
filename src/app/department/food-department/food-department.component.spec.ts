import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDepartmentComponent } from './food-department.component';

describe('FoodDepartmentComponent', () => {
  let component: FoodDepartmentComponent;
  let fixture: ComponentFixture<FoodDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
