import { Grid as _Grid } from "@duck-ui/react-components-layout";
import "@duck-ui/react-components-layout/style.css";
import React from "react";

export default {
  title: "React Components/Layout/Grid",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const FlexStory = {
  args: {
    as: "div",
    padding: 5,
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => (
    <_Flex {...args}>
      <div>테스트</div>
      <div>테스트</div>
    </_Flex>
  ),
};
