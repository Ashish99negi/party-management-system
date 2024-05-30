import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDeleteConfirmationDialogComponent } from './party-delete-confirmation-dialog.component';

describe('PartyDeleteConfirmationDialogComponent', () => {
  let component: PartyDeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<PartyDeleteConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyDeleteConfirmationDialogComponent]
    });
    fixture = TestBed.createComponent(PartyDeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
