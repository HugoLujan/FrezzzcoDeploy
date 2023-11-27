import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { UserModel } from 'app/models/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  URI_API = "http://localhost:4000/";

  constructor(private http: HttpClient) { }

  createAdmin(admin: UserModel): Observable<any> {
    return this.http.post(this.URI_API + "/users/create", admin);
  }
}
