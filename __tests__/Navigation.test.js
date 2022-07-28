/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Navigation from "../src/components/Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Navigation", () => {
  test("should show the navigation bar", () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("navigation-element")).toBeInTheDocument();
    expect(screen.getByText(/The GrapeVine/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
