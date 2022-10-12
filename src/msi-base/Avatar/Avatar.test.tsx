import React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";
import { AvatarProps } from "./Avatar.types";

describe("Avatar component tests", () => {
  let props: AvatarProps;
  beforeEach(() => {
    props = {
      name: "John Wick",
    };
  });

  const renderComponent = () => render(<Avatar {...props} />);

  it("should render with image and size defined", () => {
    props.url = './image.svg';
    props.size = 48;
    const { getByTestId } = renderComponent();
    const avatar = getByTestId('msi-avatar');
    expect(avatar).toBeInTheDocument();
  });
  
  it("should render only with image defined", () => {
    props.url = './image.svg';
    const { getByTestId } = renderComponent();
    const avatar = getByTestId('msi-avatar');
    expect(avatar).toBeInTheDocument();
  });

  it("should have the initials of the name", () => {
    const { getByText } = renderComponent();
    const split: string[] = props.name.split(' ');
    const avatar = getByText(split[0].charAt(0) + split[1].charAt(0));
    expect(avatar).toBeInTheDocument();
  });
  
  it("should have just the first letter", () => {
    props.name = 'John';
    const { getByText } = renderComponent();
    const avatar = getByText(props.name[0]);
    expect(avatar).toBeInTheDocument();
  });

  it("shouldn't have the first letter", () => {
    props.url = '/i';
    const { getByText } = renderComponent();
    const initials = screen.queryByText(props.name[0]);

    expect(initials).not.toBeInTheDocument();
  });

  it("should have an image", () => {
    props.url = './image.svg';
    const { getByTestId } = renderComponent();
    const image = getByTestId('msi-avatar');
    expect(image).toBeInTheDocument();
  });
});
