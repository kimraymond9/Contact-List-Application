import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TabsComponent from "./TabsComponent";
import contacts from "../contacts.json";

// mock the reports so we dont unnecessarily render charts and maps
jest.mock("../Reports/Report", () => ({
  default: jest.fn(() => <p>foo bar</p>),
  __esModule: true
}));

it("displays the contacts tab correctly", () => {
  const { getByTestId } = render(
    <TabsComponent data={contacts} loading={false} />
  );
  expect(getByTestId("contact-list")).toBeInTheDocument();
});

it("displays the reports tab correctly", () => {
  const { getByText } = render(<TabsComponent data={contacts} />);
  fireEvent.click(getByText("Reports"));
  expect(getByText("foo bar")).toBeInTheDocument();
});
