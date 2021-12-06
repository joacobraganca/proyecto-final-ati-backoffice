import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/paciente';
import { Misc } from '../interfaces/misc';
import { HealthHome } from '../interfaces/healthHome';
@Injectable({
  providedIn: 'root',
})
export class MiscService {
  healthHome: HealthHome | undefined;
  hospitals: Misc[] = [];
  pathologies: Misc[] = [];
  partnerServices: Misc[] = [];
  emertencyServices: Misc[] = [];

  setHealthHome(healthHome: HealthHome) {
    this.healthHome = healthHome;
  }
  setHospitals(hospitals: Misc[]) {
    this.hospitals = hospitals;
  }
  setPathologies(pathologies: Misc[]) {
    this.pathologies = pathologies;
  }
  setPartnerServices(partnerServices: Misc[]) {
    this.partnerServices = partnerServices;
  }
  setEmertencyServices(emertencyServices: Misc[]) {
    this.emertencyServices = emertencyServices;
  }

  getHealthHomeLocal() {
    return this.healthHome;
  }
  getHospitalsLocal() {
    return this.hospitals;
  }
  getPathologiesLocal() {
    return this.pathologies;
  }
  getPartnerServicesLocal() {
    return this.partnerServices;
  }
  getEmertencyServicesLocal() {
    return this.emertencyServices;
  }

  constructor(private http: HttpClient) {}
  token = localStorage.getItem('access_token') || '';

  getHospital(): Observable<HttpResponse<Misc[]>> {
    const headers = {
      'Content-type': 'application/json',
      ['Authorization']: this.token,
    };
    return this.http.get<Misc[]>(
      `https://healthhomeapi.herokuapp.com/api/hospital`,
      { headers, observe: 'response' }
    );
  }

  getPathologies(): Observable<HttpResponse<Misc[]>> {
    const headers = {
      'Content-type': 'application/json',
      ['Authorization']: this.token,
    };
    return this.http.get<Misc[]>(
      `https://healthhomeapi.herokuapp.com/api/pathologies`,
      { headers, observe: 'response' }
    );
  }

  getPartnerService(): Observable<HttpResponse<Misc[]>> {
    const headers = {
      'Content-type': 'application/json',
      ['Authorization']: this.token,
    };
    return this.http.get<Misc[]>(
      `https://healthhomeapi.herokuapp.com/api/partnerService`,
      { headers, observe: 'response' }
    );
  }

  getEmergencyService(): Observable<HttpResponse<Misc[]>> {
    const headers = {
      'Content-type': 'application/json',
      ['Authorization']: this.token,
    };
    return this.http.get<Misc[]>(
      `https://healthhomeapi.herokuapp.com/api/emergencyService`,
      { headers, observe: 'response' }
    );
  }

  getHealthHomes(): Observable<HttpResponse<HealthHome[]>> {
    const headers = {
      'Content-type': 'application/json',
      ['Authorization']: this.token,
    };
    return this.http.get<HealthHome[]>(
      `https://healthhomeapi.herokuapp.com/api/healthHome/all`,
      { headers, observe: 'response' }
    );
  }
}
