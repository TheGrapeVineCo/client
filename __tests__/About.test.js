/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../src/components/About";

describe("About", () => {
  test("renders About component", () => {
    render(<About />);
    expect(screen.getByTestId("about-element")).toBeInTheDocument();
    expect(screen.getByText("Who is The GrapeVine?")).toBeInTheDocument();
  });
});
