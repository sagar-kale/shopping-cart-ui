import { Component, OnInit } from '@angular/core';
import { CartService, BaseCartItem } from 'ng-shopping-cart';
import { CarService } from '../service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  success = false;
  constructor(
    private service: CartService<BaseCartItem>,
    private apiService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  checkout(): void {
    this.success = true;
    this.apiService
      .placeOrder({
        totalPrice: this.service.totalCost(),
        ...this.service.toObject()
      })
      .subscribe(res => {
        if (res.status === 201) {
          this.apiService.showSnackbar('Order placed successfully', 'Ok');
          this.service.clear();
        } else {
          this.apiService.showSnackbar(
            'We have facing some issue at our end, please contact administrator',
            'Ok'
          );
        }
        this.success = false;
      });
  }

  get orderCount(): number {
    return this.service.itemCount();
  }

  continueShopping(): void {
    this.router.navigate(['/cars']);
  }
}
