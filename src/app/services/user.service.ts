import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";
import {Payload} from "../models/payload.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getToken() {
    if (localStorage.getItem('user')) {
      // @ts-ignore
      return JSON.parse(localStorage.getItem('user')).token;
    }
    return  false;
  }

  isTokenValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.iss === environment.apiUrl + 'login';
      }
    }
    return false;
  }


  getUser(): User {
    const user = localStorage.getItem('user');
    // @ts-ignore
    return JSON.parse(user);
  }

  private payload(token: string): Payload {
    const payload = token.split('.')[1];
    return this.decodePayload(payload);
  }

  private decodePayload(payload: string): Payload {
    return JSON.parse(atob(payload));
  }


}
