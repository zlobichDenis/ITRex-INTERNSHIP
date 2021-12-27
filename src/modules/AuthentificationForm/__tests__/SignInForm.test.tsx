import { Provider } from "react-redux";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";
import "@testing-library/jest-dom";

import { store } from "store";
import { SignInForm } from "../components";
import * as useAuthentification from "../hooks/useAuthorization";


describe("SignIn form", () => {
  it('should take correct parameters', async () => {
    const loginMock = jest.fn((values) => console.log(values));
    // @ts-ignore
    jest.spyOn(useAuthentification, 'useAuthorization').mockImplementation(() => {
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
})
