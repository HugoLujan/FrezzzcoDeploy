import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, switchMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  private tokenUrl = "https://developer.setmore.com/api/v1/o/oauth2/token";
  private refreshToken = "r1/b522dbacc17sUXIdkr7eOVdW5NKAeVxgFbJhO13IZHr0J"; // Tu refresh token
  private servicesUrl =
    "https://developer.setmore.com/api/v1/bookingapi/services";
  private staffUrl = "https://developer.setmore.com/api/v1/bookingapi/staffs";

  private timeSoltsUrl =
    "https://developer.setmore.com/api/v1/bookingapi/slots";
  private createUserUrl =
    "https://developer.setmore.com/api/v1/bookingapi/customer/create";
  private getUserUrl =
    "https://developer.setmore.com/api/v1/bookingapi/customer?firstname=name&email=emailId&phone=phone";
  private appointmentUrl =
    "https://developer.setmore.com/api/v1/bookingapi/appointment/create";

  private baseUrl = "https://developer.setmore.com/api/v1/bookingapi/customer";

  constructor(private http: HttpClient) {}

  customerKeyEvent = new EventEmitter<string>();

  getOAuthToken(refreshToken: string): Observable<any> {
    const url = `${this.tokenUrl}?refreshToken=${refreshToken}`;
    return this.http.get(url);
  }

  getServices(): Observable<any> {
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
          const accessToken = tokenResponse.data.token.access_token;
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
          });
          return this.http.get(this.servicesUrl, { headers });
        } else {
          throw new Error("No se pudo obtener el token de acceso.");
        }
      })
    );
  }

  getStaff(): Observable<any> {
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
          const accessToken = tokenResponse.data.token.access_token;
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
          });
          return this.http.get(this.staffUrl, { headers });
        } else {
          throw new Error("No se pudo obtener el token de acceso.");
        }
      })
    );
  }

  getTimeSlots(
    staffKey: string,
    serviceKey: string,
    selectedDate: string
  ): Observable<any> {
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
          const accessToken = tokenResponse.data.token.access_token;
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
          });

          const requestBody = {
            staff_key: staffKey,
            service_key: serviceKey,
            selected_date: selectedDate,
          };

          return this.http.post(this.timeSoltsUrl, requestBody, { headers });
        } else {
          throw new Error("No se pudo obtener el token de acceso.");
        }
      })
    );
  }

  createUser(
    first_name: string,
    last_name: string,
    email_id: string,
    cell_phone: string
  ): Observable<any> {
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
          const accessToken = tokenResponse.data.token.access_token;
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
          });

          const requestBody = {
            first_name: first_name,
            last_name: last_name,
            email_id: email_id,
            cell_phone: cell_phone,
          };

          return this.http.post(this.createUserUrl, requestBody, { headers });
        } else {
          throw new Error("No se pudo obtener el token de acceso.");
        }
      })
    );
  }

  getUser(
    first_name_login: string,
    cell_phone_login: string,
  ): Observable<any> {
    const url = `${this.baseUrl}?firstname=${first_name_login}&phone=${cell_phone_login}`;
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
          const accessToken = tokenResponse.data.token.access_token;
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
          });
          return this.http.get(url, { headers });
        } else {
          throw new Error("No se pudo obtener el token de acceso.");
        }
      })
    );
  }

  createAppointment(
    staff_key: string,
    service_key: string,
    customer_key: string,
    start_time: string,
    end_time: string
  ): Observable<any> {
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
          const accessToken = tokenResponse.data.token.access_token;
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
          });

          const requestBody = {
            service_key: service_key,
            staff_key: staff_key,
            start_time: start_time,
            end_time: end_time,
            customer_key: customer_key,
          };

          return this.http.post(this.appointmentUrl, requestBody, { headers });
        } else {
          throw new Error("No se pudo obtener el token de acceso.");
        }
      })
    );
  }
}
