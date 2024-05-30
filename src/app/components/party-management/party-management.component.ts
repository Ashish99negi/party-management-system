import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyManagementService } from 'src/app/services/party-management.service';
import { PartyDetailDialogComponent } from '../party-detail-dialog/party-detail-dialog.component';
import { PartyEditDialogComponent } from '../party-edit-dialog/party-edit-dialog.component';
import { PartyDeleteConfirmationDialogComponent } from '../party-delete-confirmation-dialog/party-delete-confirmation-dialog.component';
import { PartyCreateDialogComponent } from '../party-create-dialog/party-create-dialog.component';
import { Party } from '../party.model';

@Component({
  selector: 'app-party-management',
  templateUrl: './party-management.component.html',
  styleUrls: ['./party-management.component.css'],
})
export class PartyManagementComponent {
  parties: Party[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'company_name',
    'mobile_no',
    'email',
    'actions',
  ];

  constructor(
    private partyManagementService: PartyManagementService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllParties();
  }

  getAllParties() {
    this.partyManagementService.getAllParties().subscribe(
      (data) => {
        this.parties = data;
        console.log(data, '**');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createParty() {
    const dialogRef = this.dialog.open(PartyCreateDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const maxId =
          this.parties.length > 0
            ? Math.max(...this.parties.map((p) => p.id as number))
            : 0;
        const newId = maxId + 1;
        const newParty = { id: newId, ...result };

        this.partyManagementService.createParty(newParty).subscribe(() => {
          this.getAllParties();
        });
      }
    });
  }

  viewParty(party: Party) {
    this.dialog.open(PartyDetailDialogComponent, {
      width: '400px',
      data: party,
    });
  }

  editParty(party: Party) {
    console.log(party);
    const dialogRef = this.dialog.open(PartyEditDialogComponent, {
      width: '400px',
      data: party,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const id = party.id;
        this.partyManagementService.updateParty(id, result).subscribe(() => {
          this.getAllParties();
        });
      }
    });
  }

  deleteParty(party: Party) {
    const dialogRef = this.dialog.open(PartyDeleteConfirmationDialogComponent, {
      width: '400px',
      data: party,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const id = party.id;
        this.partyManagementService.deleteParty(id).subscribe(() => {
          this.getAllParties();
        });
      }
    });
  }
}
