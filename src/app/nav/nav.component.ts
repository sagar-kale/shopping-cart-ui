import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  IconDefinition,
  faGoogle,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { from } from 'rxjs';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AuthService} from '../service/auth.service';

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
  faLinkedn: IconDefinition;

  constructor(
    private library: FaIconLibrary,
    public auth: AuthService
  ) {
    library.addIcons(faFacebook, faLinkedin, faGoogle, faLinkedin);
  }

  ngOnInit(): void {
    this.faFacebook = faFacebook;
    this.faGoogle = faGoogle;
    this.faLinkedn = faLinkedin;
  }
}
