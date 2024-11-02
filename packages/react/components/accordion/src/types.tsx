import * as React from "react";

export type AccordionProps = {
  defaultActiveItems?: string[];
  children: React.ReactNode | React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;
