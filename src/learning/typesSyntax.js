"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail = /** @class */ (function () {
    function OrderDetail(product) {
        this.product = product;
        this.product = product;
    }
    return OrderDetail;
}());
var newOrder = new OrderDetail({ name: "table", amount: 24 });
console.log(newOrder.product);
