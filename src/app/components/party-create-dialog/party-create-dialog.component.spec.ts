import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCreateDialogComponent } from './party-create-dialog.component';

describe('PartyCreateDialogComponent', () => {
  let component: PartyCreateDialogComponent;
  let fixture: ComponentFixture<PartyCreateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyCreateDialogComponent]
    });
    fixture = TestBed.createComponent(PartyCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
