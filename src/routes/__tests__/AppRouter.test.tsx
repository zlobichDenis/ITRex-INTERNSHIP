import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { store } from "store";
import { AppRouter } from "routes";
import { history } from "store";
import { ConnectedRouter } from "connected-react-router";


describe('router', () => {
  it('should render correct sign in page when click on sign in link', async () => {
    jest.restoreAllMocks();

    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Provider>
      )

    userEvent.click(screen.getByText('Sign In'))

    userEvent.type(screen.getByRole('email-input'), 'dasha@tut.by');
    userEvent.type(screen.getByRole('password-input'), 'dasha@tut.by');
    userEvent.click(screen.getByRole('submit-button'));
    userEvent.click(screen.getByRole('submit-button'));

    expect(screen.getByTestId('sign-in-form')).toBeInTheDocument()
  })
})