import { TestBed } from '@angular/core/testing';

import { MenusManagementService } from './menus-management.service';

describe('MenusManagementService', () => {
  let service: MenusManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
