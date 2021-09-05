import React from "react";
import { render } from "../../test";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("renders the avatar correctly", () => {
    const { container } = render(<Avatar />);
    expect(container).toMatchSnapshot();
  });

  it("should render with img prop given", () => {
    const { container } = render(
      <Avatar size="medium" img="https://i.pravatar.cc/150?img=3" />
    );
    expect(container).toMatchSnapshot();
  });
});
