import { PopupButton } from "./PopupButton";
import { StoryFn } from "@storybook/react";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";

export default {
    component: PopupButton,
};

const Template: StoryFn<{}> = (args) => (<PorscheDesignSystemProvider><PopupButton {...args}/></PorscheDesignSystemProvider>);

export const Story = Template.bind({});
Story.parameters = {
    screenshot: {
        variants: {
            afterClick: {
                waitFor: async () => {
                    const button = document.querySelector("#root p-button") as HTMLButtonElement;
                    button.click();
                    await new Promise((r) => setTimeout(r, 520));
                },
            },
        },
    },
};
