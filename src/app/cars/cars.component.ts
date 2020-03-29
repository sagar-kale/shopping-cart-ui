import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import { Car } from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  submitted = false;
  success = false;
  message = null;
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(res => {
      this.cars = res;
    });
  }

  loadUserToEdit(car: Car) {
    this.carService.warehouseId = car.warehouseId;
    this.carService.carId = car.carId;
  }

  check(event: any, car: Car, addToCart: boolean): void {
    if (!car.licensed) {
      event.preventDefault();
      return;
    }
    this.loadUserToEdit(car);
    if (addToCart) {
      this.carService.addTOCart(car);
    }
  }

  clearForm() {
    this.submitted = false;
  }
}
