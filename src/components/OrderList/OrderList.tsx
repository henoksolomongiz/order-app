import React, { FC, useEffect } from "react";

import { Order as OrderModel } from "../../model/Order";
import { Order } from "../Order/Order";

import "./OrderList.css";

export interface IOrderListProps {
  addOrder: (order: OrderModel) => void;
  orders: OrderModel[];
}

const OrderList: FC<IOrderListProps> = ({ orders }) => {
  useEffect(() => {}, []);

  return (
    <div className="order-list">
      <h1>Orders</h1>
      {orders.length > 0 ? (
        <React.Fragment>
          {orders.map((order, index) => (
            <Order key={index} order={order} />
          ))}
        </React.Fragment>
      ) : (
        <div className="empty-msg">No orders </div>
      )}
    </div>
  );
};

export { OrderList };
