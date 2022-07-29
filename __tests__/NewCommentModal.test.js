/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import NewCommentModal from "../src/components/NewCommentModal";

// Dispatch test mock
const dispatch = jest.fn();
React.useContext = () => dispatch;

const mockedWineListing = {
  id: 1,
};

describe("NewCommentModal", () => {
  test("renders App component", () => {
    render(<NewCommentModal show={true} listing={mockedWineListing} />);
    expect(screen.getByTestId("modal-element")).toBeInTheDocument();
  });

  it("should render input element", () => {
    render(
      <NewCommentModal
        show={true}
        allComments={[]}
        dispatch={dispatch}
        listing={mockedWineListing}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      /What are your thoughts on this wine.../i
    );
    expect(inputElement).toBeInTheDocument();
  });
});

it("should render input element", () => {
  render(
    <NewCommentModal
      show={true}
      allComments={[]}
      dispatch={dispatch}
      listing={mockedWineListing}
    />
  );
  const inputElement = screen.getByTestId("comment-input");
  expect(inputElement).toBeInTheDocument();
});
it("should be able to type input in comment box", () => {
  render(
    <NewCommentModal
      show={true}
      allComments={[]}
      dispatch={dispatch}
      listing={mockedWineListing}
    />
  );
  const inputElement = screen.getByTestId("comment-input");
  fireEvent.change(inputElement, {
    target: { value: "This is a great wine" },
  });
  expect(inputElement.value).toBe("This is a great wine");
});
