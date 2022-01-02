import { useState } from "react";

import { Order } from "../model/Order";

type OrderState = (initialOrders: Order[], intialTime: any[]) => IOrderState;

export interface IOrderState {
  orders: Order[];
  addOrder(newOrder: Order): void;
  getOrders: () => void;
  getAvailableOrderTime: (order: Order[]) => void;
  availableOrderTime: any[];
}

const useOrderState: OrderState = (
  initialOrder: Order[],
  intialTime: any[]
) => {
  const [orders, setOrders] = useState(initialOrder);
  const [availableOrderTime, setAvailableOrderTime] = useState(intialTime);

  return {
    orders,
    availableOrderTime,
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
      return orders;
    },
    getAvailableOrderTime: (orders) => {
      var times = [];
      if (
        orders.filter((x) => x.date === Date.now().toLocaleString("dd/mm/yyyy"))
          .length > 0
      ) {
        if (
          orders.filter(
            (x) =>
              x.time === "10:30" &&
              x.date === Date.now().toLocaleString("dd/mm/yyyy")
          ).length < 4
        ) {
          times.push("10:30");
          setAvailableOrderTime(times);
        }
        if (
          orders.filter(
            (x) =>
              x.time === "12:30" &&
              x.date === Date.now().toLocaleString("dd/mm/yyyy")
          ).length < 4
        ) {
          times.push("12:30");
          setAvailableOrderTime(times);
        }
        if (
          orders.filter(
            (x) =>
              x.time === "18:30" &&
              x.date === Date.now().toLocaleString("dd/mm/yyyy")
          ).length < 4
        ) {
          times.push("18:30");
          setAvailableOrderTime(times);
        }
      } else {
        times = ["10:30", "12:30", "18:30"];
        setAvailableOrderTime(times);
      }
    },
  };
};

export { useOrderState };
