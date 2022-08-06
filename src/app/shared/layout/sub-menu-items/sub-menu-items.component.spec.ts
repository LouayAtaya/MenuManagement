import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuItemsComponent } from './sub-menu-items.component';

describe('SubMenuItemsComponent', () => {
  let component: SubMenuItemsComponent;
  let fixture: ComponentFixture<SubMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
