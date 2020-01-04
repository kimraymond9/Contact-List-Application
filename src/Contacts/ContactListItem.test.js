import React from "react";
import { render } from "@testing-library/react";
import ContactListItem from "./ContactListItem";
import contacts from "../contacts.json";

it("displays the correct user information", () => {
  const { getByText } = render(<ContactListItem user={contacts[0]} />);
  expect(getByText("Leanne Graham")).toBeInTheDocument();
  expect(getByText("1-770-736-8031 x56442")).toBeInTheDocument();
  expect(getByText("Sincere@april.biz")).toBeInTheDocument();
});
