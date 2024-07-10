import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from './mocks/resMockData.json';
import '@testing-library/jest-dom';
it('Should render restaurant card component from props data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText('Chinese Wok');
  expect(name).toBeInTheDocument();
});
