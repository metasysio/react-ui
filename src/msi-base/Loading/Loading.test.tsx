import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading component tests", () => {
  it("should render without crash", () => {
    const { getByTestId } = render(<Loading />);
    const element = getByTestId("loading");
    expect(element).toBeInTheDocument();
  });
});
