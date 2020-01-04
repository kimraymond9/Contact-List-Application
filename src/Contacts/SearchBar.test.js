import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import SearchBar from "./SearchBar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<SearchBar />, div);
  unmountComponentAtNode(div);
});
