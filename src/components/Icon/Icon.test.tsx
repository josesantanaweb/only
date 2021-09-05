import React from "react";
import { render } from "../../test";
import Icon from "./Icon";

describe("Icon", () => {
  it("renders the Icon correctly", () => {
    const { container } = render(<Icon name="home" />);
    expect(container).toMatchSnapshot();
  });

  it("should render with all the props", () => {
    const { container } = render(
      <Icon name="home" size="small" colorIcon="black" />
    );
    expect(container).toMatchSnapshot();
  });
});
