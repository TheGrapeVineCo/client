/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewCommentModal from "../src/components/NewCommentModal";
// import { BrowserRouter } from "react-router-dom";
// comment
// commentList
// formData / setFormData
// test block

const mockedSetFormData = jest.fn();
describe("NewCommentModal", () => {
  test("should render input element when typing in text field", () => {
    render(<NewCommentModal formData={[]} setFormData={[mockedSetFormData]} />);
    const inputElement = screen.getByPlaceholderText(
      /Add a new comment here.../i
    );
    expect(inputElement).toBeInTheDocument();
  });
  // test("should be able to type in input", () => {
  //   render(<NewCommentModal formData={[]} setFormData={mockedSetFormData} />);
  //   const inputElement = screen.getByPlaceholderText(
  //     /Add a new comment here.../i
  //   );
  //   fireEvent.change(inputElement, {
  //     target: { value: "I really like this wine" },
  //   });
  //   expect(inputElement.value).toBeInTheDocument("I really like this wine");
  // });
  //   test("render comment input", () => {
  //     render(<NewCommentModal />);
  //     const inputElement = screen.getByTestId("comment-input");
  //     expect(inputElement).toBeInTheDocument();
  //     expect(inputElement).toHaveAttribute("type", "text");
  //   });
});

//   test("should show view comments, only when there are comments", () => {
//     const commentList = [{}];
//     render(<WineListing listing={{}} commentList={commentList} />);
//     expect(screen.getByText("View Comments...")).toBeInTheDocument();
//   });

//   //tests toggle of show/hide comments
//   test("should show and hide comments", () => {
//     const commentText = "Sweet berry wine";
//     const commentUser = "Rachel";
//     const viewCommentsBtnText = "View Comments...";
//     const hideCommentsBtnText = "Hide Comments...";
//     const commentList = [{ text: commentText, user: commentUser }];
//     render(<WineListing listing={{}} commentList={commentList} />);
//     expect(screen.queryByText(commentText)).not.toBeInTheDocument();
//     expect(screen.queryByText(commentUser)).not.toBeInTheDocument();
//     fireEvent.click(screen.getByText(viewCommentsBtnText));
//     expect(screen.getByText(commentText)).toBeInTheDocument();
//     expect(screen.getByText(commentUser)).toBeInTheDocument();
//     expect(screen.getByText(hideCommentsBtnText)).toBeInTheDocument();
//     fireEvent.click(screen.getByText(hideCommentsBtnText));
//     expect(screen.getByText(viewCommentsBtnText)).toBeInTheDocument();
//     expect(screen.queryByText(commentText)).not.toBeInTheDocument();
//     expect(screen.queryByText(commentUser)).not.toBeInTheDocument();
//   });

// test("should add user comments to wineListing")
// });
