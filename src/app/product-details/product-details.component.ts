import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/car';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  car: Car = null;
  constructor(private service: CarService) {}

  ngOnInit(): void {
    this.service
      .getCar(this.service.warehouseId, this.service.carId)
      .subscribe(res => {
        this.car = res;
        console.log(res);
      });
  }
  addCart(car: Car): void {
    this.service.addTOCart(car);
  }
}
