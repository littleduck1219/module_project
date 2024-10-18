import { Text as _Text } from "@duck-ui/react-components-layout";
import "@duck-ui/react-components-layout/style.css";
import { classes } from "@duck-ui/themes";

export default {
  title: "React Components/Layout/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: Object.keys(classes.typography.text),
    control: "select",
  },
};

export const TextStory = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "hell",
  },
};
