import React from "react";
import { render } from "@testing-library/react";
import InteractiveMap from "./InteractiveMap";
import contacts from "../contacts.json";

it("displays the map", () => {
  const { getByTestId } = render(<InteractiveMap data={contacts} />);
  expect(getByTestId("interactive-map")).toBeInTheDocument();
});
