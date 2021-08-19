import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["body-small", "body-medium", "body-large", "button"],
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Texto = Template.bind({});
Texto.args = {
  tag: "p",
  type: "body-medium",
  children: "Text",
  variant: "grey",
};
