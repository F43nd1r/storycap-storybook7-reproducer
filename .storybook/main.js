module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: ["@storybook/addon-essentials", "@storybook/preset-create-react-app", "storycap/register"],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: true,
    },
}