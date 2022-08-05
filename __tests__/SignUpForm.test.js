/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignUpForm from "../src/components/WineListing";

// Dispatch test mock
const dispatch = jest.fn();
React.useContext = () => dispatch;

const mockedLoggedInUser = {
  user: {
    email: "test@test.com",
    username: "test",
    password: "password",
    password_confirmation: "password",
  },
};

const mockedInitialFormData = {
  username: "test1",
  email: "test1@email.com",
  password: "password",
  password_confirmation: "password",
};

describe("SignUpForm", () => {
  test("should show form data", () => {
    render(
      <SignUpForm
        formData={mockedInitialFormData}
        loggedInUser={mockedLoggedInUser}
      />
    );
    expect(screen.getByText("Email Address:")).toBeInTheDocument();
  });
});
