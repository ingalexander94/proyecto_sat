import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataRoles } from '../shared/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  showPassword: boolean = false;
  typePassword: String = 'password';
  typeDocument: String = 'password';
  roleActive: String = 'docente';
  roles = dataRoles;

  createFormLogin(): FormGroup {
    return new FormGroup({
      code: new FormControl('1234567', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
      ]),
      document: new FormControl('1234567890', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ]),
      password: new FormControl('1234567890123', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    });
  }

  constructor(private router: Router) {
    this.formLogin = this.createFormLogin();
  }

  ngOnInit(): void {}

  changeShowPassword() {
    this.showPassword = !this.showPassword;
    this.typePassword = this.showPassword ? 'number' : 'password';
  }

  changeTypeDocument(option: boolean) {
    option ? (this.typeDocument = 'number') : (this.typeDocument = 'password');
  }

  changeRole(role: String) {
    this.roles[this.roleActive.toString()].isActive = false;
    this.roles[role.toString()].isActive = true;
    this.roleActive = role;
  }

  onSubmit() {
    console.log({
      ...this.formLogin.value,
      role: this.roleActive,
    });
    this.router.navigate([`/${this.roleActive.toLowerCase()}`]);
  }
}
