import { OverloadedButtonFunction } from "./type";

export const useButton: OverloadedButtonFunction = (props: any): any => {
  const {
    elementType = "button",
    isDisabled,
    isLoading,
    tabIndex,
    onKeyDown,
    type = "button",
  } = props;

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    onKeyDown?.(event);

    if (event.key === " " || event.key === "Spacebar" || event.key === "32") {
      if (disabled) return;
      if (event.defaultPrevented) return;
      if (elementType === "button") return;
      event.preventDefault();
      (event.currentTarget as HTMLElement).click();

      return;
    }

    if (event.key === "Enter" || event.key === "13") {
      if (disabled) return;
      if (event.defaultPrevented) return;
      if (elementType === "input" && type !== "button") return;
      event.preventDefault();
      (event.currentTarget as HTMLElement).click();

      return;
    }
  };

  const baseProps = {
    ...props,
    "data-loading": isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };
};
