import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGoogle,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faCog, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  title = `Car Deals`;
  faFacebook: IconDefinition;
  faGoogle: IconDefinition;
  faTwitter: IconDefinition;
  settings: IconDefinition;
  fasignOut: IconDefinition;
  faUser: IconDefinition;

  constructor(public library: FaIconLibrary, public auth: AuthService) {
    library.addIcons(faFacebook, faLinkedin, faGoogle, faLinkedin, faCog);
  }

  ngOnInit(): void {
    this.faFacebook = faFacebook;
    this.faGoogle = faGoogle;
    this.settings = faCog;
    this.fasignOut = faSignOutAlt;
    this.faUser = faUser;
  }
}
