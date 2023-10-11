import { Injectable } from "@angular/core";
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
  private timeSoltsUrl = "https://developer.setmore.comapi/v1/bookingapi/slots";

  constructor(private http: HttpClient) {}

  private baseUrl = "https://developer.setmore.com/api/v1/o/oauth2/token";
  services: [] = [];

  getOAuthToken(refreshToken: string): Observable<any> {
    const url = `${this.tokenUrl}?refreshToken=${refreshToken}`;
    // console.log(this.http.get(url));
    return this.http.get(url);
  }

  getServices(): Observable<any> {
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        // Verificamos que tokenResponse contenga el token de acceso
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
        // Verificamos que tokenResponse contenga el token de acceso
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

  // getTimeSolts(): Observable<any> {
  //   return this.getOAuthToken(this.refreshToken).pipe(
  //     switchMap((tokenResponse) => {
  //       // Verificamos que tokenResponse contenga el token de acceso
  //       if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
  //         const accessToken = tokenResponse.data.token.access_token;
  //         const headers = new HttpHeaders({
  //           Authorization: `Bearer ${accessToken}`,
  //         });
  //         return this.http.get(this.timeSoltsUrl, { headers });
  //       } else {
  //         throw new Error("No se pudo obtener el token de acceso.");
  //       }
  //     })
  //   );
  // }

  getTimeSlots(staffKey: string, serviceKey: string, selectedDate: string): Observable<any> {
    return this.getOAuthToken(this.refreshToken).pipe(
      switchMap((tokenResponse) => {
        // Verificamos que tokenResponse contenga el token de acceso
        if (tokenResponse && tokenResponse.data && tokenResponse.data.token) {
          const accessToken = tokenResponse.data.token.access_token;
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
          });
          
    const requestBody = {
      staff_key: staffKey,
      service_key: serviceKey,
      selected_date: selectedDate
    };

    return this.http.post(this.timeSoltsUrl, requestBody, { headers });
  }
  else {
    throw new Error("No se pudo obtener el token de acceso.");
  }
})
);

}
}
