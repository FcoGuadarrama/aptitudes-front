import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aspirante-register',
  templateUrl: './aspirante-register.component.html',
  styleUrls: ['./aspirante-register.component.css']
})
export class AspiranteRegisterComponent implements OnInit {
  registerForm: any;
  isRegistered: boolean = false;
  results: any;

  constructor(private _router: Router) {
     this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      age: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
    });
  }

  ngOnInit(): void {
  }

  getSignIn(){
    this.isRegistered = true;
  }

  get name() { return this.registerForm.get('name'); }
  get lastname() { return this.registerForm.get('lastname'); }
  get email() { return this.registerForm.get('email'); }
  get age() { return this.registerForm.get('age'); }

  getResults(results: any){
    this.results = results;
  }

}
