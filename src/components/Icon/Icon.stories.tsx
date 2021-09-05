import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./Icon";
// import Text from "./Text";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    colorIcon: {
      control: {
        type: "background",
      },
    },
  },
} as ComponentMeta<typeof Icon>;

export const All: ComponentStory<typeof Icon> = () => (
  <div className="d-flex flex-wrap">
    <div className="mr-30 mb-20">
      <Icon name="home" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="check" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="bookmark" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="lists" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="more" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="messages" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="notifications" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="profile" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="suscriptions" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="add" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="filter" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="search" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="star" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="send" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="tag" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="dots" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="lock" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="cash" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="arrow-right" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="arrow-left" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="arrow-down" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="arrow-up" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="bell" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="copy" size="large" />
    </div>
    <div className="mr-30">
      <Icon name="chat" size="large" />
    </div>
  </div>
);
