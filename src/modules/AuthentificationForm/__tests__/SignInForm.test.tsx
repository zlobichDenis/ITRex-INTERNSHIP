import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { SignInForm } from "../components/SignIn/components/SignInForm";
import * as useAuthentification from "../hooks/useAuthentification";


describe("SignIn form", () => {
  it('should take correct parameters', async () => {
    const loginMock = jest.fn((values) => console.log(values))
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

})