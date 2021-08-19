import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  tag: "h1",
  children: "Heading 1",
  variant: "tertiary",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  tag: "h2",
  children: "Heading 2",
  variant: "tertiary",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  tag: "h3",
  children: "Heading 3",
  variant: "tertiary",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  tag: "h4",
  children: "Heading 4",
  variant: "tertiary",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  tag: "h5",
  children: "Heading 5",
  variant: "tertiary",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  tag: "h6",
  children: "Heading 6",
  variant: "tertiary",
};
