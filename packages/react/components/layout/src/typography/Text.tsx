import * as React from "react";
import { TextProps } from "./types";
import { clsx } from "clsx";
import { vars } from "@module_project/themes";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";

const Text = (props: TextProps, ref: React.Ref<HTMLElement>) => {
  const { as = "p", color, background, children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        background: vars.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};

const _Text = React.forwardRef(Text);
export { _Text as Text };
