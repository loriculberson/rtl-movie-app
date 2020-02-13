import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders on the page", () => {
    const { debug, getByTestId } = render(<Counter />);
    const counterButton = getByTestId("counter-button")
    
    expect(counterButton.tagName).toBe('BUTTON')
    expect(counterButton.textContent).toBe("0");
  });

  it('increments the count value', () => {
    const { debug, getByTestId } = render(<Counter />);
    const counterButton = getByTestId("counter-button")

    fireEvent.click(counterButton)
    expect(counterButton.textContent).toBe("1");

    fireEvent.click(counterButton)
    expect(counterButton.textContent).toBe("2");
  })
});
