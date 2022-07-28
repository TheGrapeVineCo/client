/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../src/App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("app-element")).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Uh oh! Page not found!/i)).toBeInTheDocument();
  });
});
