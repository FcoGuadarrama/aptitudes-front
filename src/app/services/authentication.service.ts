import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";
import {LoginResponse} from "../models/resposes/login.response";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User>;
  private user: Observable<User>;

  constructor(private router: Router,
              private http: HttpClient) {
    // @ts-ignore
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: any, password: any) {
    return this.http.post<any>(`${environment.apiUrl}login`, {email, password})
      .pipe(map((response: LoginResponse) => {
        const user = response.user;
        user.token = response.access_token;
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(<User>user);
        return user;
      }));
  }

  signup(user: any){
    return this.http.post<any>(`${environment.apiUrl}signup`, user);

  }

  logout() {
    localStorage.removeItem('user');
    // @ts-ignore
    this.userSubject.next(null);
    this.router.navigate(['login']);
  }
}
