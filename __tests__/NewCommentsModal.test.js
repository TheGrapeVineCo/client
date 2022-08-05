/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NewCommentModal from "../src/components/NewCommentModal";

// Dispatch test mock
const dispatch = jest.fn();
React.useContext = () => dispatch;

const mockedWineListing = {
  id: 1,
  brand: "Test wine",
  grape_variety: "Shiraz",
  year: 2019,
  category: "Red",
  country: "Australia",
  region: "Barossa Valley",
  description: "A wine made from the growers bare hands",
};

const mockedLoggedInUser = {
  user: {
    email: "test@test.com",
    username: "test",
    password: "password",
    password_confirmation: "password",
  },
};

describe("NewCommentForm", () => {
  it("should render input element", () => {
    render(
      <NewCommentModal
        show={true}
        allComments={[]}
        dispatch={dispatch}
        listing={mockedWineListing}
        loggedInUser={mockedLoggedInUser}
      />
    );
    const inputElement = screen.getByTestId("comment-input");
    expect(inputElement).toBeInTheDocument();
  });
});
