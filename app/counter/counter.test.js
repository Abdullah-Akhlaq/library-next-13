
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/counter/counter';



test('counter increments and decrements', () => {
  const { getByText, getByTestId }  = render(<Counter />);
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');
  const countDisplay = getByTestId('count');

  expect(countDisplay).toHaveTextContent('0');

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('1');

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent('0');
});