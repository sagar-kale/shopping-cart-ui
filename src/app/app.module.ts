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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarsComponent,
    HomeComponent,
    ProductDetailsComponent,
    MapComponent,
    CartComponent
  ],
  imports: [
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
        clearOnError: true
      }
    })
  ],
  providers: [CarService],
  exports: [MatIconModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
