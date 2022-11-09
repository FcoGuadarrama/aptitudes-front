import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {AuthenticationService} from "../../services/authentication.service";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  public error = null;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login ');
  }

  onSubmit(){
    this.error = null;
    return this.authService.login(this.form.email, this.form.password).pipe(first()).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/admin/dashboard'])
      }, error => {
        console.log(error);
        this.error = error.error;
      }
    );
  }
}
