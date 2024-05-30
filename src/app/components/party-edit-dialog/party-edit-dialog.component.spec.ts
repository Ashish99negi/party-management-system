import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyEditDialogComponent } from './party-edit-dialog.component';

describe('PartyEditDialogComponent', () => {
  let component: PartyEditDialogComponent;
  let fixture: ComponentFixture<PartyEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyEditDialogComponent]
    });
    fixture = TestBed.createComponent(PartyEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
