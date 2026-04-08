import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders home hero", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(
    screen.getByText(/Industrial hardware/i)
  ).toBeInTheDocument();
});
