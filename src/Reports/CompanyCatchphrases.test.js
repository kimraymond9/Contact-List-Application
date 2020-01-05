import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CompanyCatchphrases from "./CompanyCatchphrases";
import contacts from "../contacts.json";

it("progress indicator is displayed while catchphrase are being fetched", () => {
  const { getByTestId } = render(<CompanyCatchphrases user={contacts[0]} />);
  // a progress indicator should be displayed while the catchphrase is being fetched.
  expect(getByTestId("catchphrases-progress-indicator")).toBeInTheDocument();
});

it("catch phrase is displayed after the image is loaded", async () => {
  const { getByTestId, queryByTestId } = render(
    <CompanyCatchphrases user={contacts[0]} />
  );
  // the company catchphrase should be displayed once the data is fetched.
  expect(queryByTestId("company-catchphrase")).not.toBeInTheDocument();
  fireEvent.load(getByTestId("company-image"));
  expect(getByTestId("company-catchphrase")).toBeInTheDocument();
});
