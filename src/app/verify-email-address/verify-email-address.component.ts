import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { faRedoAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.component.html',
  styleUrls: ['./verify-email-address.component.scss']
})
export class VerifyEmailAddressComponent implements OnInit {
  faRedoAlt: IconDefinition;
  timeLeft = 120;
  interval: any;
  success = false;

  constructor(
    public authService: AuthService,
    private lib: FaIconLibrary,
    private carServic: CarService
  ) {
    lib.addIcons(faRedoAlt);
  }
  ngOnInit(): void {
    this.faRedoAlt = faRedoAlt;
    this.success = true;
    this.startTimer();
  }

  resendVerification(): void {
    this.authService
      .sendVarificationMail()
      .then(() => {
        this.success = true;
        this.carServic.showSnackbar(
          'Varification mail send , please check your mailbox',
          'Ok'
        );
        this.timeLeft = 120;
        this.startTimer();
      })
      .catch(err => {
        this.carServic.showSnackbar(err.message, 'Ok');
      });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.success = false;
      }
    }, 1000);
  }
}
