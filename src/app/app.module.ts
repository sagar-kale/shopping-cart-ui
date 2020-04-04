import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseCartItem, ShoppingCartModule } from 'ng-shopping-cart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarService } from './service/car.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { AuthService } from './service/auth.service';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerifyEmailAddressComponent } from './verify-email-address/verify-email-address.component';
import { ProfileComponent } from './profile/profile.component';
import { DataService } from './shared/data.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarsComponent,
    HomeComponent,
    ProductDetailsComponent,
    MapComponent,
    CartComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    VerifyEmailAddressComponent,
    ProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ShoppingCartModule.forRoot({
      // <-- Add the cart module to your root module
      itemType: BaseCartItem, // <-- Configuration is optional
      serviceType: 'localStorage',
      serviceOptions: {
        storageKey: 'NgShoppingCart',
        clearOnError: true,
      },
    }),
    FontAwesomeModule,
  ],
  providers: [CarService, AuthService, DataService],
  exports: [MatIconModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
