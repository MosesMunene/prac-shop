import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesmanagementComponent } from './categoriesmanagement.component';

describe('CategoriesmanagementComponent', () => {
  let component: CategoriesmanagementComponent;
  let fixture: ComponentFixture<CategoriesmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
