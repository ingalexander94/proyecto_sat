import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  roles: any[] = [
    {
      icon: 'fa-user-tie',
      isActive: true,
      text: 'Docente',
    },
    {
      icon: 'fa-user',
      isActive: false,
      text: 'Estudiante',
    },
    {
      icon: 'fa-user-check',
      isActive: false,
      text: 'Vicerrector',
    },
  ];
  roleActive: String = this.roles[0].text;

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

  constructor() {
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

  changeRole(position: number) {
    this.roles.map((role) => (role.isActive = false));
    this.roles[position].isActive = true;
    this.roleActive = this.roles[position].text;
  }

  onSubmit() {
    console.log({
      ...this.formLogin.value,
      role: this.roleActive,
    });
  }
}
