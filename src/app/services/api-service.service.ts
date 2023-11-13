import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { Conference } from 'src/app/model/Conference';
import { Details } from 'src/app/model/Details';
import { Programms } from 'src/app/model/Programms';
import { Speakers } from 'src/app/model/Speakers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  httpOption: any;
  confId = new BehaviorSubject<any>('6542b68e478df56679e32f22');
  progId = new BehaviorSubject<any>('6548b56d62d67c3c18cecd75');

  progIdobs = this.progId.asObservable();
  confIdobs = this.confId.asObservable();
  constructor(private http: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // ,Authorization: 'my-auth-token'
      }),
    };
  }
 
  getconference(): Observable<Conference[]> {
    return this.http.get<Conference[]>(`${environment.APIURL}conferences`);
  }
  getconferenceById(confID: number): Observable<Conference> {
    return this.http.get<Conference>(`${environment.APIURL}conferences/${confID}`);
  }
  getconferenceSpeakers(confID: any): Observable<Conference> {
    return this.http.get<Conference>(`${environment.APIURL}conferences/${confID}/speakers`);
  }
  getconferenceProgrammes(confID: number): Observable<Conference> {
    return this.http.get<Conference>(`${environment.APIURL}conferences/${confID}/programmes`);
  }
  getconferenceAbout(confID: any): Observable<Conference> {
    return this.http.get<Conference>(`${environment.APIURL}conferences/${confID}/about`);
  }

  //programme details

  getdetails (progID: number): Observable<Details> {
    return this.http.get<Details>(`${environment.APIURL}details/6546ae12e497b06458057254`);
  }

  //programmes
  getprogrammes (): Observable<Programms> {
    return this.http.get<Programms>(`${environment.APIURL}programmes`);
  }
  getprogrammesById (progID: number): Observable<Programms> {
    return this.http.get<Programms>(`${environment.APIURL}programmes/${progID}`);
  }
  getprogrammesDetails (progID: number): Observable<Programms> {
    return this.http.get<Programms>(`${environment.APIURL}programmes/${progID}/details`);
  }

  //speakers
  getspeakers (): Observable<Speakers> {
    return this.http.get<Speakers>(`${environment.APIURL}speakers`);
  }
  getspeakerById (id:string): Observable<Speakers> {
    return this.http.get<Speakers>(`${environment.APIURL}speakers/${id}`);
  }
}
