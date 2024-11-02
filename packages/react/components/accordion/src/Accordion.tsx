import * as React from "react";
import { AccordionProps } from "./types";
import AccordionContext from "./AccordionContext";
import { useState } from "react";
import { accordionStyle } from "./style.css";
import { clsx } from "clsx";

const Accordion = (props: AccordionProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    children,
    defaultActiveItems = [],
    className,
    style,
    ...rest
  } = props;
  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItems) => activeItems !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ activeItems, setActiveItem: handleSetActiveItem }}
    >
      <div {...rest} ref={ref} className={clsx([accordionStyle, className])}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const _Accordion = React.forwardRef(Accordion);
export { _Accordion as Accordion };
