import React from "react";
import { render } from "@testing-library/react";
import ContactsByLetter from "./ContactsByLetter";
import contacts from "../contacts.json";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null
}));

it("displays the correct bar graph", () => {
  const { getByTestId } = render(<ContactsByLetter data={contacts} />);
  expect(getByTestId("bar-graph")).toBeInTheDocument();
});
