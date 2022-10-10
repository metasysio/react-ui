import React from "react";
import { render } from "@testing-library/react";

import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component Button", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      variant: "primary"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const buttonComponent = getByTestId("msi-button");

    expect(buttonComponent).toHaveClass("btn-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.variant = "secondary";
    const { getByTestId } = renderComponent();

    const buttonComponent = getByTestId("msi-button");

    expect(buttonComponent).toHaveClass("btn-secondary");
  });
});
