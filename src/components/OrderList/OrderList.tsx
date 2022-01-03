import React, { FC, useEffect } from "react";

import { Order as OrderModel } from "../../model/Order";
import { OrderItem } from "../OrderItem/OrderItem";

import "./OrderList.css";

export interface IOrderListProps {
  orders: OrderModel[];
}

const OrderList: FC<IOrderListProps> = ({ orders }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="items-head">
        <p>Orders</p>
      </div>
      {orders.length > 0 ? (
        <React.Fragment>
          <div className="items-body">
            {orders.map((order, index) => (
              <OrderItem key={index} order={order} />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <div className="empty-msg">No orders </div>
      )}
    </div>
  );
};

export { OrderList };
