import React, { ChangeEvent, FC, useState } from "react";
import { Order } from "../../model/Order";
import "./AddOrder.css";

export interface IAddOrderProps {
  addOrder: (newOrder: Order) => void;
  availableOrderTime: any[];
}

const AddOrder: FC<IAddOrderProps> = ({ addOrder, availableOrderTime }) => {
  const [order, setOrder] = useState<Order>({
    customerId: "",
    date: "",
    orderId: "",
    time: "",
  });
  const handleTime = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder({
      customerId: order.customerId,
      date: Date.now().toString(),
      orderId: Math.random().toString(),
      time: e.target.value,
    });
  };
  const handleCustomer = (e: ChangeEvent<HTMLInputElement>) => {
    setOrder({
      customerId: e.target.value,
      date: Date.now().toString(),
      orderId: Math.random().toString(),
      time: order.time,
    });
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    addOrder(order);
    setOrder({
      customerId: "",
      date: Date.now().toString(),
      orderId: Math.random().toString(),
      time: order.time,
    });
  };

  return (
    <div className="order-form form-inline">
      <select
        defaultValue={""}
        className="option"
        id="time"
        name="time"
        onChange={(evt) => {
          handleTime(evt);
        }}
      >
        <option disabled value="">
          Select Time
        </option>
        {availableOrderTime.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="customerId"
        placeholder="Enter Customer"
        onChange={(evt) => {
          handleCustomer(evt);
        }}
        value={order.customerId}
      />
      <button
        className="order-form--submit"
        onClick={handleClick}
        disabled={order.customerId.length < 1 || order.time.length < 1}
      >
        Add Order
      </button>
    </div>
  );
};

export { AddOrder };
