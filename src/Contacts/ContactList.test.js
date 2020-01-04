import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import ContactList from "./ContactList";
import contacts from "../contacts.json";

it("displays OnUserClickedComponent when user is clicked", () => {
  const { queryByText, getByText, getByTestId } = render(
    <ContactList
      data={contacts}
      OnUserClickedComponent={() => <p>foo bar</p>}
    />
  );
  expect(queryByText("foo bar")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("user-list-item-1"));
  expect(getByText("foo bar")).toBeInTheDocument();
});

it("closes dialog when back button is pressed", async () => {
  const { queryByText, getByTestId } = render(
    <ContactList
      data={contacts}
      OnUserClickedComponent={() => <p>foo bar</p>}
    />
  );
  fireEvent.click(getByTestId("user-list-item-1"));
  fireEvent.click(getByTestId("contact-dialog-back-button"));
  await wait(() => {
    expect(queryByText("foo bar")).not.toBeInTheDocument();
  });
});

it("search displays the appropriate results", async () => {
  const { getByLabelText, findAllByTestId } = render(
    <ContactList data={contacts} OnUserClickedComponent={() => <div></div>} />
  );
  // searching for 'we' so that only Kurtis Weissnat and Ervin Howell appears
  fireEvent.change(getByLabelText("Search"), {
    target: { value: "we" }
  });
  const users = await findAllByTestId(/^user-list-item-\d+$/);
  expect(users).toHaveLength(2);
});
