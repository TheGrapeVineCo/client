/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import WineListing from "../src/components/WineListing";

// test block
describe("WineListing", () => {
  test("should show wine listing", () => {
    const testWineListing = {
      id: 1,
      brand: "Tolpuddle",
      grape_variety: "Sangiovese",
      year: 2013,
      category: "White",
      country: "Australia",
      region: "Tasmania",
      description: "Lorem ipsum",
    };
    render(<WineListing listing={testWineListing} commentList={[]} />);
    //   expects to return true when listed testId && getByText located in browser
    expect(screen.getByTestId("wineListing-element")).toBeInTheDocument();
    expect(screen.getByText("Tolpuddle")).toBeInTheDocument();
    expect(screen.getByText("Sangiovese")).toBeInTheDocument();
    expect(screen.getByText("2013")).toBeInTheDocument();
    expect(screen.getByText("White")).toBeInTheDocument();
    expect(screen.getByText("Australia")).toBeInTheDocument();
    expect(screen.getByText("Tasmania")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Add Comment")).toBeInTheDocument();
  });

  test("should show view comments, only when there are comments", () => {
    const commentList = [{}];
    render(<WineListing listing={{}} commentList={commentList} />);
    expect(screen.getByText("View Comments...")).toBeInTheDocument();
  });

  //tests toggle of show/hide comments
  test("should show and hide comments", () => {
    const commentText = "Sweet berry wine";
    const commentUser = "Rachel";
    const viewCommentsBtnText = "View Comments...";
    const hideCommentsBtnText = "Hide Comments...";
    const commentList = [{ text: commentText, user: commentUser }];
    render(<WineListing listing={{}} commentList={commentList} />);
    expect(screen.queryByText(commentText)).not.toBeInTheDocument();
    expect(screen.queryByText(commentUser)).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(viewCommentsBtnText));
    expect(screen.getByText(commentText)).toBeInTheDocument();
    expect(screen.getByText(commentUser)).toBeInTheDocument();
    expect(screen.getByText(hideCommentsBtnText)).toBeInTheDocument();
    fireEvent.click(screen.getByText(hideCommentsBtnText));
    expect(screen.getByText(viewCommentsBtnText)).toBeInTheDocument();
    expect(screen.queryByText(commentText)).not.toBeInTheDocument();
    expect(screen.queryByText(commentUser)).not.toBeInTheDocument();
  });

  // test("should add user comments to wineListing")
});
