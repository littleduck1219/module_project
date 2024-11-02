import { createContext, useContext } from "react";

export type AccordionContextType = {
  activeItems: string[];
  setActiveItem: (id: string) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  activeItems: [],
  setActiveItem: () => {},
});

export const useAccordionContext = () => useContext(AccordionContext);
export default AccordionContext;
