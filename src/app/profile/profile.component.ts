import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faGoogle, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  faFacebook: IconDefinition;
  faGoogle: IconDefinition;
  faTwitter: IconDefinition;
  faGit: IconDefinition;
  spinner: IconDefinition;
  success = false;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.faFacebook = faFacebook;
    this.faGoogle = faGoogle;
    this.faGit = faGithub;
    this.faTwitter = faTwitter;
    this.spinner = faSpinner;
  }
}
