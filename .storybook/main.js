module.exports = {
  "stories": [
    "../packages/core/stories/**/*.stories.mdx",
    "../packages/core/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/core/components/**/*.stories.mdx",
    "../packages/core/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/core/constants/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-css-modules-preset"
  ],
  "typescript": {
    "check": false,
    "checkOptions": {},
    "reactDocgen": 'react-docgen-typescript',
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "propFilter": (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "storybook-builder-vite"
  }
}