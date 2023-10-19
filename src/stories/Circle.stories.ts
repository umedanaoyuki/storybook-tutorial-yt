
import {Meta, StoryObj} from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
    title: 'Tutorial/Circle',
    component: Circle,
} satisfies Meta<typeof Circle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCircle = {};

