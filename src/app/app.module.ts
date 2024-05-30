import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { LoginComponent } from './components/login/login.component';
import { PartyManagementComponent } from './components/party-management/party-management.component';
import { PartyDetailDialogComponent } from './components/party-detail-dialog/party-detail-dialog.component';
import { PartyEditDialogComponent } from './components/party-edit-dialog/party-edit-dialog.component';
import { PartyDeleteConfirmationDialogComponent } from './components/party-delete-confirmation-dialog/party-delete-confirmation-dialog.component';
import { PartyCreateDialogComponent } from './components/party-create-dialog/party-create-dialog.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, PartyManagementComponent, PartyDetailDialogComponent, PartyEditDialogComponent, PartyDeleteConfirmationDialogComponent, PartyCreateDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
