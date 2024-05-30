import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Party } from '../components/party.model';

@Injectable({
  providedIn: 'root',
})
export class PartyManagementService {
  private apiUrl = 'https://ap.greatfuturetechno.com';
  token: string | null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAllParties() {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.token}`,
    });
    return this.http.get<Party[]>(`${this.apiUrl}/party/`, { headers });
  }

  getPartyById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/party/?id=${id}`);
  }

  createParty(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.token}`,
    });
    return this.http.post<any>(`${this.apiUrl}/party/`, data, { headers });
  }

  updateParty(id: number | undefined, data: any) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.token}`,
    });
    return this.http.put<any>(`${this.apiUrl}/party/?id=${id}`, data, {
      headers,
    });
  }

  deleteParty(id: number | undefined) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.token}`,
    });
    return this.http.delete<any>(`${this.apiUrl}/party/?id=${id}`, { headers });
  }
}
