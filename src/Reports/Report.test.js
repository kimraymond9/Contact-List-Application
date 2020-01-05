import React from "react";
import { render } from "@testing-library/react";
import Report from "./Report";
import contacts from "../contacts.json";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null
}));

it("displays the correct user information", () => {
  const { getByTestId } = render(<Report data={contacts} />);
  expect(getByTestId("bar-graph")).toBeInTheDocument();
  expect(getByTestId("interactive-map")).toBeInTheDocument();
  expect(getByTestId("bar-graph-domain")).toBeInTheDocument();
});
