import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    name: {
      type: "string",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Jose",
  size: "medium",
};

export const Imagen = Template.bind({});
Imagen.args = {
  img: "https://i.pravatar.cc/150?img=12",
  size: "large",
};
