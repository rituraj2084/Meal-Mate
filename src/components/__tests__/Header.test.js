import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('Should render header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button');
  expect(loginButton).toBeInTheDocument();
});

it('Should render header component with cart 0 item', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText('Cart (0)');
  expect(cartItem).toBeInTheDocument();
});

it('Should render header component with cart', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it('Should change login to logout button on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button', { name: 'Login' });
  expect(loginButton).toBeInTheDocument();
  fireEvent.click(loginButton);
  const logoutButon = screen.getByRole('button', { name: 'Logout' });
  expect(logoutButon).toBeInTheDocument();
});
