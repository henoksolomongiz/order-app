import React, { FC, useState } from "react";
import { Order } from "../../model/Order";

export interface IAddOrderProps {
  addOrder: (newOrder: Order) => void;
}

const AddOrder: FC<IAddOrderProps> = ({ addOrder }) => {
  const [order, setOrder] = useState<Order>({
    customerId: "",
    date: "",
    orderId: "",
    time: "",
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    addOrder(order);
    setOrder({ customerId: "", date: "", orderId: "", time: "" });
  };

  return (
    <form>
      <select></select>
      <input
        type="text"
        name="customerId"
        placeholder="Enter Customer"
        onChange={(evt) => {
               }}
        value={order.customerId}
      />
      <button onClick={handleClick}>Add Order</button>
    </form>
  );
};

export { AddOrder };
