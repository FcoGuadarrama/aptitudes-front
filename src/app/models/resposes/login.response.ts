import {User} from "../user.model";

export class LoginResponse {
  access_token: string | any;
  expires_in: number | any;
  token_type: string | any;
  user: User | any;
  token: any
}
