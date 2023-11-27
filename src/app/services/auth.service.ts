import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserModel, UserResponse } from "app/models/admin";
import { Observable, catchError, throwError, map, BehaviorSubject } from "rxjs";


const helper = new JwtHelperService();

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  URI_API = "http://localhost:4000";

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  } 

  logIn(authData: UserModel): Observable<any> {
    return this.http
      .post<UserResponse | void>(this.URI_API + "/login", authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  private checkToken() {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired ->', isExpired);
    isExpired ? this.logOut() : this.loggedIn.next(true);
    // if(isExpired){
    //   this.logOut();
    // }else{
    //   this.loggedIn.next(true);
    // }

  }
  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handlerError(err: any): Observable<never> {
    const errorMessage = err
      ? `Error: code ${err.message}`
      : "An error occurred retrieving data";
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
