import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { faRedoAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.component.html',
  styleUrls: ['./verify-email-address.component.scss']
})
export class VerifyEmailAddressComponent implements OnInit {
  faRedoAlt: IconDefinition;
  constructor(public authService: AuthService, private lib: FaIconLibrary) {
    lib.addIcons(faRedoAlt);
  }
  ngOnInit(): void {
    this.faRedoAlt = faRedoAlt;
  }
}
