import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = `Frank's Garage`;
  faFacebook: IconDefinition;
  faGoogle: IconDefinition;
  faTwitter: IconDefinition;
  settings: IconDefinition;

  constructor(private library: FaIconLibrary, public auth: AuthService) {
    library.addIcons(faFacebook, faLinkedin, faGoogle, faLinkedin, faCog);
  }

  ngOnInit(): void {
    this.faFacebook = faFacebook;
    this.faGoogle = faGoogle;
    this.settings = faCog;
  }
}
