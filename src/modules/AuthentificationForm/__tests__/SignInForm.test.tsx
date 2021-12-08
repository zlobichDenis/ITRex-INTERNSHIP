import { Provider } from "react-redux";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";
import "@testing-library/jest-dom";

import { store } from "store";
import { SignInForm } from "../components/SignIn/components/SignInForm";
import * as useAuthentification from "../hooks/useAuthentification";


describe("SignIn form", () => {
  it('should take correct parameters', async () => {
    const loginMock = jest.fn((values) => console.log(values));
    jest.spyOn(useAuthentification, 'useAuthentification').mockImplementation(() => {
      return { loginRequest: (values) => loginMock(values) }
    })

    const { getByRole } = render(<SignInForm />)

    userEvent.type(getByRole('email-input'), 'dasha@tut.by');
    userEvent.type(getByRole('password-input'), 'dasha@tut.by');
    userEvent.click(getByRole('submit-button'));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith({
        userName: 'dasha@tut.by',
        password: 'dasha@tut.by',
      })
    })
  })

  it('should render succes notify when login is successs', async () => {
    jest.restoreAllMocks();

    render(
      <Provider store={store}>
        <SignInForm />
        <ToastContainer />
      </Provider>
      )

    userEvent.type(screen.getByRole('email-input'), 'dasha@tut.by');
    userEvent.type(screen.getByRole('password-input'), 'dasha@tut.by');
    userEvent.click(screen.getByRole('submit-button'));

    await waitFor(() => {
      expect(screen.getByText('You have successfully entered!')).toBeInTheDocument();
    })
  })

  it('should render error notify when login is failse', async () => {
    jest.restoreAllMocks();

    render(
      <Provider store={store}>
        <SignInForm />
        <ToastContainer />
      </Provider>
      )

    userEvent.type(screen.getByRole('email-input'), 'asdfasdf@tut.by');
    userEvent.type(screen.getByRole('password-input'), 'asdfasdf');
    userEvent.click(screen.getByRole('submit-button'));

    await waitFor(() => {
      expect(screen.getByText('Unsuccess login')).toBeInTheDocument();
    })
  })
})
