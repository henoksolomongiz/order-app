/* eslint-disable testing-library/prefer-screen-queries */
import {  render } from "@testing-library/react"; 
import { OrderList } from "./OrderList";

it("should display no order on empty order", () => {
  // Act
  const { getByText } =  render(<OrderList orders={[]} />);

  const element = getByText('No orders');

    // Assert
    expect(element).toBeInTheDocument();
});
