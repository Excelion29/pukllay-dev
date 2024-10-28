import { TestBed } from '@angular/core/testing';

import { ModalCategoriesService } from './modal-categories/modal-categories.service';

describe('ModalCategoriesService', () => {
  let service: ModalCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
