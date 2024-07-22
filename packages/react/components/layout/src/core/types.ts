import { vars } from "@module_project/themes";
import { StyleSprinkles } from "./style.css";

// HTML태그에 대한 요소들만 받는다.
type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color: keyof typeof vars.colors.$scale & string;
  background: keyof typeof vars.colors.$scale & string;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
