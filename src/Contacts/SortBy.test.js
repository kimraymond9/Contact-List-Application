import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import SortBy from "./SortBy";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<SortBy />, div);
  unmountComponentAtNode(div);
});
