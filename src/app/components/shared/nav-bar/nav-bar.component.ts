import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  get loggedIn() {
    return this.authService.userValue && this.authService.userValue.token;
  }

  logOut() {
    this.authService.logout();
  }

}
