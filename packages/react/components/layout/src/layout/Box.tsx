import * as React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([StyleSprinkles(props), props.className]),
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
