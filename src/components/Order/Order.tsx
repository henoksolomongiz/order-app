import React, { FC } from "react";

import { Order as OrderModel } from "../../model/Order";

import "./Order.css";

export interface IOrderProps {
  order: OrderModel;
}

const Order: FC<IOrderProps> = ({ order }) => {
  return (
    <div>
      <p className="orderId">{order.orderId}</p>
      <div className="time">{order.time}</div>
    </div>
  );
};

export { Order };
