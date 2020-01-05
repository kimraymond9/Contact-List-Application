import React from "react";
import { render } from "@testing-library/react";
import TopLevelDomains from "./TopLevelDomains";
import contacts from "../contacts.json";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null
}));

it("displays the correct bar graph", () => {
  const { getByTestId } = render(<TopLevelDomains data={contacts} />);
  expect(getByTestId("bar-graph-domain")).toBeInTheDocument();
});
