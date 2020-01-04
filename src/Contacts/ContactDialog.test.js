import React from "react";
import { render } from "@testing-library/react";
import ContactDialog from "./ContactDialog";

it("displays contact dialog when open is true", () => {
  const { getByTestId } = render(<ContactDialog open />);
  expect(getByTestId("contact-dialog")).toBeInTheDocument();
});

it("does not display contact dialog when open is false", () => {
  const { queryByTestId } = render(<ContactDialog open={false} />);
  expect(queryByTestId("contact-dialog")).not.toBeInTheDocument();
});

it("displays children as its content", () => {
  const { getByText } = render(
    <ContactDialog open>
      <p>foo bar</p>
    </ContactDialog>
  );
  expect(getByText("foo bar")).toBeInTheDocument();
});
