import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoriesComponent } from './modal-categories.component';

describe('ModalCategoriesComponent', () => {
  let component: ModalCategoriesComponent;
  let fixture: ComponentFixture<ModalCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
