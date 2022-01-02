import { useState } from "react";

import { Order } from "../model/Order";

type OrderState = (initialOrders: Order[]) => IOrderState;

export interface IOrderState {
  orders: Order[];
  addOrder(newOrder: Order): void;
  getOrders: () => void;
}

const useOrderState: OrderState = (initialValue: Order[]) => {
  const [orders, setOrders] = useState(initialValue);

  return {
    orders,
    addOrder: (newOrder: Order) => {
      setOrders(orders.concat(newOrder));
    },
    getOrders: () => {
      if (!window.localStorage) {
        return;
      }
      const storedOrderStr = window.localStorage.getItem("app.orders");
      if (storedOrderStr === null || storedOrderStr.length < 1) {
        return;
      }
      setOrders(JSON.parse(storedOrderStr));
    },
  };
};

export { useOrderState };
