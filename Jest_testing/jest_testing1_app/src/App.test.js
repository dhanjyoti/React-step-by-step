import { render, screen } from "@testing-library/react";
import App from "./App";

test("This is first React Test Case", () => {
  render(<App />);
  const text = screen.getByText(/This is first React Test Case/i);
  const title = screen.getByTitle("peacock feather")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
}) 

test("Testing Input box", () => {
  render(<App />);
  let checkInput = screen.getByRole('textbox');
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "dhanjyoti rabha ");
})