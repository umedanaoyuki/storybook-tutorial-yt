
import {Meta, StoryObj} from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
    title: 'Tutorial/Circle',
    component: Circle,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Circle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCircle = {};

