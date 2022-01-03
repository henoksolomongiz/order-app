/* eslint-disable testing-library/prefer-screen-queries */
 
import {  render } from "@testing-library/react";
import { AddOrder } from "./AddOrder";
 

it("should display no order on empty order", () => {

    // Arrange
    const addOrder = jest.fn();
  // Act
  const { getByText } =  render(<AddOrder
    addOrder={addOrder}
    availableOrderTime={["10:30", "12:30", "18:30"]}
  />);

  const element = getByText('Add Order');

    // Assert
    expect(element).toBeInTheDocument();
});
