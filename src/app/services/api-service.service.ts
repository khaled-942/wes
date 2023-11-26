import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,HttpErrorResponse
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import { Conference } from 'src/app/model/Conference';
import { Details } from 'src/app/model/Details';
import { Programms } from 'src/app/model/Programms';
import { Speakers } from 'src/app/model/Speakers';
import { environment } from 'src/environments/environment';
import { Rooms } from '../model/Rooms';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  httpOption: any;
  token:any;
  auth=false;

  confId = new BehaviorSubject<any>('6542b68e478df56679e32f22');
  progId = new BehaviorSubject<any>('65528be9cf3bf63984e0808c');
  roomId = new BehaviorSubject<any>('65520a58d23e9f3efc1b2348');

  progIdobs = this.progId.asObservable();
  confIdobs = this.confId.asObservable();
  roomIdobs = this.roomId.asObservable();

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // ,Authorization: 'my-auth-token'
      }),
    };

  }

  //conference

  getconference(): Observable<Conference[]> {
    return this.http.get<Conference[]>(`${environment.APIURL}conferences`);
  }
  getconferenceById(confID: any): Observable<Conference> {
    return this.http.get<Conference>(`${environment.APIURL}conferences/${confID}`);
  }
  getconferenceSpeakers(confID: any): Observable<Conference> {
    return this.http.get<Conference>(
      `${environment.APIURL}conferences/${confID}/speakers`
    );
  }
  getconferenceProgrammes(confID: any): Observable<Conference> {
    return this.http.get<Conference>(
      `${environment.APIURL}conferences/${confID}/programmes`
    );
  }
  getconferenceAbout(confID: any): Observable<Conference> {
    return this.http.get<Conference>(`${environment.APIURL}conferences/${confID}/about`);
  }

  getmainconference(): Observable<Conference> {

    return this.http.get<Conference>(`${environment.APIURL}mainconference`);
  }
  //programme details

  getdetails(detailsID: number): Observable<Details> {
    return this.http.get<Details>(`${environment.APIURL}details/${detailsID}`);
  }

  //programmes

  getprogrammes(): Observable<Programms[]> {
    return this.http.get<Programms[]>(`${environment.APIURL}programmes`);
  }
  getprogrammesById(progID: number): Observable<Programms> {
    return this.http.get<Programms>(
      `${environment.APIURL}programmes/${progID}`
    );
  }
  getprogrammesRooms(progID: number): Observable<Programms> {
    return this.http.get<Programms>(
      `${environment.APIURL}programmes/${progID}/rooms`
    );
  }

  //rooms

  getroomsById(roomID: number): Observable<Rooms> {
    return this.http.get<Rooms>(`${environment.APIURL}rooms/${roomID}`);
  }
  getroomsDetails(roomID: number): Observable<Rooms> {
    return this.http.get<Rooms>(
      `${environment.APIURL}rooms/${roomID}/details`
    );
  }

  //speakers

  getspeakers(): Observable<Speakers[]> {
    return this.http.get<Speakers[]>(`${environment.APIURL}speakers`);
  }
  getspeakerById(speakerid: string): Observable<Speakers> {
    return this.http.get<Speakers>(
      `${environment.APIURL}speakers/${speakerid}`
    );
  }

//token

// private handleError(error:HttpErrorResponse){
//   if(error.status === 0){
//     console.error('An error occured:',error.error);

//   }else{
//     console.error(
//       `Backend and returned code ${error.status}, body was: `,error.error
//     )
//   }
//   return throwError(
//     ()=> new Error('eRROR OCCURED ; PLEASE TRY AGAIN')
//     );
// }


login(adminInfo:any){
  return this.http.post(`${environment.APIURL}users/login`,adminInfo,{
    headers: this.httpOption.headers
  })

}
isAuth(){
  if(this.token){
    this.auth=true;
  }
  return this.auth
}

}
