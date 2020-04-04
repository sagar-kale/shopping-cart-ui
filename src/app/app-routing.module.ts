import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './service/auth.guard';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailAddressComponent } from './verify-email-address/verify-email-address.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './service/auth.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailAddressComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'change-pwd',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
  },
  { path: 'reset-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
