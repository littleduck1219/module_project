import * as React from "react";
import { FlexProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@duck-ui/themes";

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    children,
    color,
    background,
    align,
    basis,
    direction,
    grow,
    justify,
    shrink,
    wrap,
    gap,
  } = props;

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
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Flex = React.forwardRef(Flex);
export { _Flex as Flex };
