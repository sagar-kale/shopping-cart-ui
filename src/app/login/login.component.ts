import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGoogle,
  faLinkedin,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faFacebook: IconDefinition;
  faGoogle: IconDefinition;
  faTwitter: IconDefinition;
  faLinkedn: IconDefinition;
  loginForm: FormGroup;

  constructor(
    private library: FaIconLibrary,
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    library.addIcons(faFacebook, faLinkedin, faGoogle, faLinkedin);
  }

  ngOnInit(): void {
    this.faFacebook = faFacebook;
    this.faGoogle = faGoogle;
    this.faLinkedn = faLinkedin;
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signInWithCredentials(): void {
    const email = this.getValue('email');
    const password = this.getValue('password');
    this.auth
      .signInWithCredentials(email, password)
      .then(() => {
        console.log('login success');
      })
      .catch(err => {
        this.openSnackBar(err.message, 'Ok');
      });
  }
  getValue(control: string): string {
    return this.loginForm.get(control).value;
  }
  openSnackBar(msg: string, action: string): void {
    this.snackbar.open(msg, action);
  }
}
