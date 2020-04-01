import { Component, OnInit } from '@angular/core';
import {
  faAsymmetrik,
  faFacebook,
  faGoogle,
  faGithub,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';
import { CarService } from '../service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faAsy: IconDefinition;
  faFacebook: IconDefinition;
  faGoogle: IconDefinition;
  faGit: IconDefinition;
  registerForm: FormGroup;
  spinner: IconDefinition;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private carService: CarService,
    private router: Router
  ) {
    this.faAsy = faAsymmetrik;
    this.faFacebook = faFacebook;
    this.faGit = faGithub;
    this.faGoogle = faGoogle;
    this.spinner = faSpinner;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      ],
      password: ['', Validators.required]
    });
  }

  register(): void {
    this.success = true;
    this.auth
      .registerUser(this.registerForm.value)
      .then(() => {
        this.success = false;
        this.router.navigate(['/verify-email']);
      })
      .catch(err => {
        this.carService.showSnackbar(err.message, 'Ok');
        this.success = false;
      });
  }
}
