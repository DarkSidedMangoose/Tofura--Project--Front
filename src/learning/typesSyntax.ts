import Product from "./product";
export {};

class OrderDetail {
  constructor(public product: Product) {
    this.product = product;
  }
}

const newOrder = new OrderDetail({ name: "table", amount: 24 });

console.log(newOrder.product);
