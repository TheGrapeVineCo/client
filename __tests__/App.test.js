/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByTestId("app-element")).toBeInTheDocument();
  });

  test("renders navigation", () => {
    render(<App />);
    expect(screen.getByText(/The GrapeVine/i)).toBeInTheDocument();
  });
});
