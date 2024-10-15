import * as React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@duck-ui/themes";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        backgroundColor: "yellow",
        ...props.style,
      },
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
