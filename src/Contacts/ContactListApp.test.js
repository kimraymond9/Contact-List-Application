import React from "react";
import ContactListApp from "./ContactListApp";
import { waitForElementToBeRemoved, render } from "@testing-library/react";
import contacts from "../contacts.json";

// eslint-disable-next-line no-native-reassign
fetch = jest
  .fn()
  .mockImplementation(() =>
    Promise.resolve({ ok: true, json: () => contacts })
  );

it("progress indicator is displayed while contacts are being fetched", () => {
  render(<ContactListApp url="http://jsonplaceholder.typicode.com/users" />);
  expect(fetch).toHaveBeenLastCalledWith(
    "http://jsonplaceholder.typicode.com/users"
  );
});

it("progress indicator is displayed while contacts are being fetched", () => {
  const { getByTestId } = render(<ContactListApp />);
  // a progress indicator should be displayed while the contact list is being fetched.
  expect(getByTestId("progress-indicator")).toBeInTheDocument();
});

it("progress indicator is removed and contacts list is displayed after contacts are fetched", async () => {
  const { getByTestId } = render(<ContactListApp />);
  // the contact list should be displayed once the data is fetched.
  await waitForElementToBeRemoved(() => getByTestId("progress-indicator"));
  expect(getByTestId("contact-list")).toBeInTheDocument();
});
