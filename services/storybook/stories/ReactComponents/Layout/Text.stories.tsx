import "@module_project/react-components-layout/style.css";
import { Text as _Text } from "@module_project/react-components-layout";

export default {
  title: "React Components/Layout/Text",
  component: _Text,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export const TextStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
