import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../Model/order';
import { HttpService } from './http.service'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DeliveryService {
  baseUrl: string;
  orderDetails: Order;
  distanceCost: number;
  stairCost: number;
  customerTypeCost: number;
  couponCost: number;
  weekendCost: number;
  isDataSaved: boolean;


  constructor(private httpService: HttpService) {
    this.orderDetails = new Order();
  }

  defaultValue() {
    this.orderDetails = new Order();
    this.distanceCost = 0;
    this.stairCost = 0;
    this.customerTypeCost = 0;
    this.couponCost = 0;
    this.weekendCost = 0;
    this.isDataSaved = false;
  }
  
  GetDistanceCost(distance: number) {
    debugger;
    this.httpService.Get('http://localhost:65282/GetDistanceCost/' + distance).subscribe(data => {
      var decimalData = data;
      this.distanceCost = decimalData.toFixed(2);
      console.log(data);
    });
  }

  GetStairCharges(stair: number) {
    debugger;
    this.httpService.Get('http://localhost:65282/GetStairCharges/' + stair).subscribe(data => {
      var decimalData = data;
      this.stairCost = decimalData.toFixed(2);
      console.log(data);
    });
  }

 
  GetChargeByCustomer(customerType: string) {
    debugger;
    this.httpService.Get('http://localhost:65282/GetChargeByCustomer/' + customerType).subscribe(data => {
      var decimalData = data;
      this.customerTypeCost = decimalData.toFixed(2);
      console.log(data);
    });
  }

  GetChargeByCoupon(coupon: string) {
    debugger;
    this.httpService.Get('http://localhost:65282/GetChargeByCoupon/' + coupon).subscribe(data => {
      var decimalData = data;
      this.couponCost = decimalData.toFixed(2);
      console.log(data);
    });
  }

  GetWeekendCost() {
    this.httpService.Get('http://localhost:65282/GetWeekendCharges/' ).subscribe(data => {
      var decimalData = data;
      this.weekendCost = decimalData.toFixed(2);
      console.log(data);
    });
  }

  SaveDelivery(orderDetails: Order) {
    debugger;
    this.httpService.Post('http://localhost:65282/SaveDelivery/', orderDetails).subscribe(data => {
      var dataSaved = data;
      this.isDataSaved = dataSaved;
      console.log(data);
    });
  }

}
