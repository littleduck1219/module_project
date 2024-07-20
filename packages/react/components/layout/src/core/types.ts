import { StyleSprinkles } from "./style.css";

// HTML태그에 대한 요소들만 받는다.
type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type StyleProps = Parameters<typeof StyleSprinkles>[0];
