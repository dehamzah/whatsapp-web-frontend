import type { Preview } from "@storybook/react";
// this is needed to import the css in our app to storybook preview app
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
