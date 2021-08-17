import React from "react";
import { render } from "../../test";
import Heading from "./Heading";

describe("Heading", () => {
  it("renders the avatar correctly", () => {
    const { container } = render(<Heading>Titulo</Heading>);
    expect(container).toMatchSnapshot();
  });

  it("should render with all the props", () => {
    const { container } = render(
      <Heading variant="primary" uppercase tag="h1" className="mb-20">
        Titulo
      </Heading>
    );
    expect(container).toMatchSnapshot();
  });
});
