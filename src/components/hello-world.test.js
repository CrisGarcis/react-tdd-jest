import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "./hello-world";
test("reder hello world", () => {
  render(<HelloWorld />);
  const title = screen.getByText(/hello d/i);
  expect(title).toBeInTheDocument();
});
