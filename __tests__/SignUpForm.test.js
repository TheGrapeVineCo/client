/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignUpForm from "../src/components/WineListing";

describe("SignUpForm", () => {
  test("should show form data", () => {
    render(<SignUpForm />);
    expect(screen.getByText("Email Address:")).toBeInTheDocument();
  });
});
