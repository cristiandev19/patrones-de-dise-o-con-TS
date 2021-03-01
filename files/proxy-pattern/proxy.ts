interface IOrder {
  fulfillOrder(param: Order): void;
}

class Warehouse implements IOrder {
  stock: any;
  address: string;

  fulfillOrder(order: Order) {
    for (let i of order.itemList) {

    }
  }
  
  currentInventory(item: Item): number {
    if (this.stock.includes(item.sku)) {
      return +this.stock[item.sku];
    }
    return 0;
  }
}

class OrderFulfillment implements IOrder {
  warehouses:  Array<Warehouse>;

  fulfillOrder(order: Order) {
    for(let i of order.itemList) {
      for(let w of this.warehouses) {

      }
    }
    return ;
  }
  
}
