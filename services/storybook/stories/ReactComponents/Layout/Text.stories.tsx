import { Text as _Text } from "@duck-ui/react-components-layout";
import "@duck-ui/react-components-layout/style.css";
import { classes, vars } from "@duck-ui/themes";

export default {
  title: "React Components/Layout/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const TextStory = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "hell",
    color: "gray",
  },
};
