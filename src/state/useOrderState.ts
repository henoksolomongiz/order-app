import { useState } from "react";

import { Order } from "../model/Order";
import orderService from "../service/order.service";

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
      orderService
        .getAll()
        .then((response: any) => {
          setOrders(JSON.parse(response.data));
          window.localStorage.setItem("app.orders", JSON.parse(response.data));
        })
        .catch((e: Error) => {
          const storedOrderStr = [
            {
              date: "2021-11-29",
              time: "10:30",
              orderId: "123",
              customerId: "a-111",
            },
            {
              date: "2021-11-29",
              time: "10:30",
              orderId: "223",
              customerId: "a-211",
            },
            {
              date: "2021-11-29",
              time: "12:30",
              orderId: "323",
              customerId: "a-211",
            },
            {
              date: "2021-11-29",
              time: "18:30",
              orderId: "423",
              customerId: "a-411",
            },
          ];

          setOrders(storedOrderStr);
        });
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
