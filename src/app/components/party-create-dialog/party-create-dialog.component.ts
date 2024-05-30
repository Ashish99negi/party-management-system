import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-party-create-dialog',
  templateUrl: './party-create-dialog.component.html',
  styleUrls: ['./party-create-dialog.component.css'],
})
export class PartyCreateDialogComponent {
  createPartyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PartyCreateDialogComponent>
  ) {
    this.createPartyForm = this.fb.group({
      name: ['', Validators.required],
      company_name: ['', Validators.required],
      mobile_no: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      gstin: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.createPartyForm.valid) {
      this.dialogRef.close(this.createPartyForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
