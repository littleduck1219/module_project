import "@module_project/themes/themes.css";
import  "./style.css"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
        },
        rootAttributeTooltip: true,
        rootAttributes: {
            root: "body",
            attribute: "class",
            defaultState: {
                name: "light",
                value: "light"
            },
            states: [
                {
                    name: "dark",
                    value: "dark"
                }
            ]
      }
  },
};

const initTheme = () => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkTheme) {
      document.body.classList.add("theme-dark");
    }

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQueryList.addEventListener("change", (e) => {
      if (e.matches) {
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
      }
    });
};

initTheme();

export default preview;
