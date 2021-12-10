import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { SignUpForm } from "../features/SignUpForm";
import * as useAuthentification from "../hooks/useAuthentification";


describe("SignUp form", () => {
  it('should take correct parameters', async () => {
    const registrationMock = jest.fn((values) => console.log(values))
    jest.spyOn(useAuthentification, 'useAuthentification').mockImplementation(() => {
      return ({ 
        registrationRequest: (values) => registrationMock(values),
      })
    })

    const { getByRole } = render(<SignUpForm />)

    userEvent.type(getByRole('first-name-input'), 'Dasha');
    userEvent.type(getByRole('last-name-input'), 'Bukina');
    userEvent.type(getByRole('email-input'), 'dasha@tut.by');
    userEvent.type(getByRole('password-input'), 'dasha@tut.by');
    userEvent.type(getByRole('password-confirm-input'), 'dasha@tut.by');
    userEvent.click(getByRole('submit-button'));

    await waitFor(() => {
      expect(registrationMock).toHaveBeenCalledWith({
        firstName: "Dasha",
        lastName: "Bukina",
        userName: "dasha@tut.by",
        password: "dasha@tut.by",
      })
    })
  })

})

