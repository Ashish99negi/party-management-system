import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-party-delete-confirmation-dialog',
  templateUrl: './party-delete-confirmation-dialog.component.html',
  styleUrls: ['./party-delete-confirmation-dialog.component.css'],
})
export class PartyDeleteConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PartyDeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
