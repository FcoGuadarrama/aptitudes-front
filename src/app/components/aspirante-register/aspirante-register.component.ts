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
  registered_aspirante: any;

  constructor(private _router: Router) {
     this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      control_number: new FormControl('', Validators.required),
      career: new FormControl('', Validators.required),
      semester: new FormControl('', Validators.required),
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
  get control_number() { return this.registerForm.get('control_number'); }
  get career() { return this.registerForm.get('career'); }
  get semester() { return this.registerForm.get('semester'); }

  getResults(results: any){
    this.results = results.results;
    this.registered_aspirante = results.aspirante;
  }

}
