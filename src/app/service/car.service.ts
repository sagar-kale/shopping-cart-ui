import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../cars/car';
import { BaseCartItem, CartService } from 'ng-shopping-cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  readonly CARS = '/cars';
  readonly WAREHOUSE = '/addWarehouse';
  readonly CAR = '/car';
  readonly DELIMETER = '/';
  warehouseId: string;
  carId: string;
  constructor(
    private http: HttpClient,
    private cartService: CartService<BaseCartItem>,
    private snackBar: MatSnackBar
  ) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(environment.globalUrl + this.CARS);
  }
  getCar(warehouseId: string, carId: string): Observable<Car> {
    return this.http.get<Car>(
      environment.globalUrl +
        this.CAR +
        this.DELIMETER +
        warehouseId +
        this.DELIMETER +
        carId
    );
  }

  placeOrder(data: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(environment.globalUrl + '/order', data, {
      observe: 'response'
    });
  }

  addTOCart(car: Car) {
    const item = new BaseCartItem();
    item.setId(car.carId);
    item.setName(car.make + ' ' + car.model);
    item.setPrice(car.price);
    item.setQuantity(1);
    item.setImage('../../assets/img/car.jpg');
    item.setData({
      warehouseId: car.warehouseId,
      warehouseName: car.warehouseName,
      year_model: car.year_model
    });
    const cartItem = this.cartService.getItem(car.carId);
    if (cartItem) {
      this.showSnackbar('Item already exists in cart', 'Ok');
      return;
    }
    this.cartService.addItem(item);
    this.showSnackbar('Item added in cart', 'Ok');
  }

  showSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
      // here specify the position
      // verticalPosition: 'top'
    });
  }
}
