/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotFound from "../src/components/NotFound";

describe("NotFound", () => {
  test("renders NotFound component", () => {
    render(<NotFound />);
    expect(screen.getByTestId("notFound-element")).toBeInTheDocument();
    expect(screen.getByText("Tolpuddle")).toBeInTheDocument();
  });
});
