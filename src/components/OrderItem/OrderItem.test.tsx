/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'; 
import { OrderItem } from './OrderItem';

test('renders order', () => {
	 
  });
  it("should display order time", () => {
    // Act
    const { getByText } =  render(<OrderItem order={{ customerId: 'a-122', date: Date.now().toLocaleString(), orderId:'12',time:'12:30'}} />);
  
    const element = getByText('12:30');
  
      // Assert
      expect(element).toBeInTheDocument();
  });
  