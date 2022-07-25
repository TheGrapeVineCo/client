import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders the landing page and its key components", () => {
  render(<App />);
  expect(screen.getByRole("Navbar.Brand")).toHaveDisplayValue("The GrapeVine");
  expect(screen.getByRole("svg")).toBeInTheDocument();
  expect(screen.getByText("p")).toHaveDisplayValue("Torbreck");
});
