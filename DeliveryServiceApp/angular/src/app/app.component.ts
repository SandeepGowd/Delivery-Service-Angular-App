/// <reference path="model/order.ts" />
import { Component, OnInit } from '@angular/core';
import { Order } from './Model/order';
import { DeliveryService } from './Service/delivery.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  orderDetails: Order;
  isStairEnabled: boolean;
  isWeekendEnabled: boolean;
  isCouponValid: boolean;
  savedStatus: string;
  submitted: boolean = false;

  constructor(private deliveryService: DeliveryService) {
    this.orderDetails = new Order();
  }

  ngOnInit() {
    debugger;
    this.orderDetails.orderCost = 0;
    this.orderDetails.customerType = 'New';
  }

  calculateTotalCost() {
    debugger;
    if (this.isWeekendEnabled) {
      this.orderDetails.orderCost = this.deliveryService.weekendCost;
    }
    else if (this.isCouponValid) {
      this.orderDetails.orderCost = this.deliveryService.couponCost;
    }
    else if (this.deliveryService.stairCost==undefined) {
      this.orderDetails.orderCost = this.deliveryService.distanceCost;
    }
    else {

      this.orderDetails.orderCost = this.deliveryService.distanceCost + this.deliveryService.stairCost;
    }
    this.deliveryService.orderDetails.orderCost = this.orderDetails.orderCost;

    
    
  }
  

  onSubmit() {
    debugger;
    this.deliveryService.SaveDelivery(this.deliveryService.orderDetails);
    if (this.deliveryService.isDataSaved) {
      this.savedStatus = 'Your Data has been saved successfully';
    }
    this.submitted = true;
  }

  getDistanceCost() {
    debugger;
    this.deliveryService.GetDistanceCost(this.orderDetails.distance);
  }

  getStairCost(stair) {
    debugger; 
    this.deliveryService.GetStairCharges(stair);
  }

  getCustomerTypeCost(customerType) {
    debugger;
    if (customerType == true) {
      this.orderDetails.customerType = 'New';
    }
    else if (customerType==false) {
      this.orderDetails.customerType = 'Old';
    }
    this.deliveryService.orderDetails.customerType = this.orderDetails.customerType;
    //this.orderDetails.customerType = customerType;
    this.deliveryService.GetChargeByCustomer(this.orderDetails.customerType);
  }

  getCouponOfferCost(coupon) {
    debugger;
    this.isCouponValid = true;
    this.deliveryService.GetChargeByCoupon(coupon);
  }

  getWeekendCost(isWeekEnd) {
    debugger;
    this.deliveryService.GetWeekendCost();
  }

  addNewOrder() {
    debugger;
    this.isWeekendEnabled = false;
    this.orderDetails = new Order();
    this.deliveryService.defaultValue();
  }

}
