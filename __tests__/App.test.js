/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByTestId("app-element")).toBeInTheDocument();
  });
});
