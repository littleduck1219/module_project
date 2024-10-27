import * as React from "react";
import { ButtonProps } from "./types";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { clsx } from "clsx";
import { vars } from "@duck-ui/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function Button(
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftIcon,
    rightIcon,
    isLoading,
    style,
    isDisabled = false,
    onKeyDown,
    children,
  } = props;

  const enabledColor = vars.colors.$scale[color][500];

  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  return (
    <button
      {...props}
      ref={ref}
      role="button"
      className={clsx([buttonStyle({ size, variant })])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enabledColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
}

const _Button = React.forwardRef(Button);
export { _Button as Button };
