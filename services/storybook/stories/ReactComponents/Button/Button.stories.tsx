import React from "react";
import "@duck-ui/react-components-button/style.css";
import { Button as _Button } from "@duck-ui/react-components-button";
import "@duck-ui/react-components-layout/style.css";
import { Text } from "@duck-ui/react-components-layout";
import { vars } from "@duck-ui/themes";
import { useButton, useToggleButton } from "@duck-ui/react-hooks-button";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};

const TextButtonComponent = () => {
  const { buttonProps } = useButton({
    elementType: "div",
    onClick: () => {
      console.log("ttt");
    },
  });

  return (
    <Text
      {...buttonProps}
      as="div"
      fontSize="md"
      color="green"
      style={{
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      텍스트 버튼입니다.
    </Text>
  );
};

export const TextButtonStory = {
  render: TextButtonComponent,
};

const ToggleButtonComponent = () => {
  const { buttonProps, isSelected } = useToggleButton(
    { elementType: "button" },
    false,
  );

  return (
    <_Button
      {...buttonProps}
      variant={isSelected ? "solid" : "outline"}
      color="green"
    >
      {isSelected ? "😀" : "😂"}
    </_Button>
  );
};

export const ToggleButtonStory = {
  render: ToggleButtonComponent,
};
