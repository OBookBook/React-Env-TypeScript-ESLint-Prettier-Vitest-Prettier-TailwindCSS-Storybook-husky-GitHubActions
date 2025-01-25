import TextInput from "./TextInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
