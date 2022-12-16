// .storybook/preview.js
import { GlobalStyle } from "../styles/GlobalStyles";
import { DesignSystemProvider } from "../hooks/useDesignSystem";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <DesignSystemProvider>
        <GlobalStyle />
        <Story />
      </DesignSystemProvider>
    </>
  ),
];
