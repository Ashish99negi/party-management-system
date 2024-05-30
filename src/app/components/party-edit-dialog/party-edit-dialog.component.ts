import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-party-edit-dialog',
  templateUrl: './party-edit-dialog.component.html',
  styleUrls: ['./party-edit-dialog.component.css'],
})
export class PartyEditDialogComponent {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PartyEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: [data.name, Validators.required],
      company_name: [data.company_name, Validators.required],
      mobile_no: [data.mobile_no, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      gstin: [data.gstin, Validators.required],
    });
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
