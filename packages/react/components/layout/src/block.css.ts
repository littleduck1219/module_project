import { vars } from "@module_project/themes";
import { style } from "@vanilla-extract/css";

export const blockStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$scale.blue[900],
});
