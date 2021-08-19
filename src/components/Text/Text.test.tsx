import React from "react";
import { render } from "../../test";
import Text from "./Text";

describe("Text", () => {
  it("renders the text correctly", () => {
    const { container } = render(<Text type="body-medium">Texto</Text>);
    expect(container).toMatchSnapshot();
  });

  it("should render with all the props", () => {
    const { container } = render(
      <Text variant="grey" tag="p" type="body-large">
        Texto
      </Text>
    );
    expect(container).toMatchSnapshot();
  });
});
