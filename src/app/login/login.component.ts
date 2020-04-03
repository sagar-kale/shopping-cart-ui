import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGoogle,
  faGithub,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faFacebook: IconDefinition;
  faGoogle: IconDefinition;
  faTwitter: IconDefinition;
  faGit: IconDefinition;
  loginForm: FormGroup;
  spinner: IconDefinition;
  success = false;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.faFacebook = faFacebook;
    this.faGoogle = faGoogle;
    this.faGit = faGithub;
    this.spinner = faSpinner;
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signInWithCredentials(): void {
    this.success = true;
    this.auth
      .signInWithCredentials(this.loginForm.value)
      .then(user => {
        if (!user.emailVerified) {
          this.router.navigate(['/verify-email']);
          return;
        }
        this.router.navigate(['/']);
        this.success = false;
      })
      .catch(err => {
        this.openSnackBar(err.message, 'Ok');
        this.success = false;
      });
  }

  getValue(control: string): string {
    return this.loginForm.get(control).value;
  }

  openSnackBar(msg: string, action: string): void {
    this.snackbar.open(msg, action);
  }

  facebookSignIn() {
    this.auth
      .facebookLogin()
      .then(user => {
        if (!user.emailVerified) {
          this.router.navigate(['/verify-email']);
          return;
        }
        this.router.navigate(['/']);
      })
      .catch(err => this.openSnackBar(err.message, 'Ok'));
  }

  googleLogin() {
    this.auth
      .googleSignIn()
      .then(user => {
        if (!user.emailVerified) {
          this.router.navigate(['/verify-email']);
          return;
        }
        this.router.navigate(['/']);
      })
      .catch(err => this.openSnackBar(err.message, 'Ok'));
  }
  gitHubLogin() {
    this.auth
      .githubLogin()
      .then(user => {
        if (!user.emailVerified) {
          this.router.navigate(['/verify-email']);
          return;
        }
        this.router.navigate(['/']);
      })
      .catch(err => this.openSnackBar(err.message, 'Ok'));
  }
}
