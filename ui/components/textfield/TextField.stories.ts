import type { Meta, StoryObj } from "@storybook/react";

import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    label: "Placeholder",
    size: "large",
  },
};
