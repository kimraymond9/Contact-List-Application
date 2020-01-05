import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BusinessCard from "./BusinessCard";
import contacts from "../contacts.json";

it("progress indicator is displayed while business card is being fetched", () => {
  const { getByTestId } = render(<BusinessCard user={contacts[0]} />);
  // a progress indicator should be displayed while the catchphrase is being fetched.
  expect(getByTestId("business-card-progress-indicator")).toBeInTheDocument();
});

it("business card is displayed after the image is loaded", async () => {
  const { getByTestId, queryByTestId } = render(
    <BusinessCard user={contacts[0]} />
  );
  // the company catchphrase should be displayed once the data is fetched.
  expect(queryByTestId("business-card")).not.toBeInTheDocument();
  fireEvent.load(getByTestId("business-card-image"));
  expect(getByTestId("business-card")).toBeInTheDocument();
});
