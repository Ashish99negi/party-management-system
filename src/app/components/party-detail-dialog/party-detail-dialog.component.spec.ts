import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetailDialogComponent } from './party-detail-dialog.component';

describe('PartyDetailDialogComponent', () => {
  let component: PartyDetailDialogComponent;
  let fixture: ComponentFixture<PartyDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyDetailDialogComponent]
    });
    fixture = TestBed.createComponent(PartyDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
