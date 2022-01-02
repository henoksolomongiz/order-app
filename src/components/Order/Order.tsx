import React, { FC } from "react";

import { Order as OrderModel } from "../../model/Order";

import "./Order.css";

export interface IOrderProps {
  order: OrderModel;
}

const Order: FC<IOrderProps> = ({ order }) => {
  return (
    <div className="items-body-content">
      <span>{order.customerId}</span>
      <i className="fa fa-angle-right">{order.time}</i>
    </div>
  );
};

export { Order };
