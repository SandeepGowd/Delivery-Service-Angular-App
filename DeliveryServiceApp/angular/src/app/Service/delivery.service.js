"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../Model/order");
var DeliveryService = /** @class */ (function () {
    function DeliveryService(http) {
        this.http = http;
        this.orderDetails = new order_1.Order();
    }
    DeliveryService.prototype.GetDistanceCost = function (distance) {
        this.http.get('http://localhost/api/');
    };
    return DeliveryService;
}());
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map