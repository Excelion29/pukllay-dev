import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalUsersComponent } from './internal-users.component';

describe('InternalUsersComponent', () => {
  let component: InternalUsersComponent;
  let fixture: ComponentFixture<InternalUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
