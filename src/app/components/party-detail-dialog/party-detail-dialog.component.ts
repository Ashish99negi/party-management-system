import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-party-detail-dialog',
  templateUrl: './party-detail-dialog.component.html',
  styleUrls: ['./party-detail-dialog.component.css'],
})
export class PartyDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PartyDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
