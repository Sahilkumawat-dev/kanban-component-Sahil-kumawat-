import type { Meta, StoryObj } from "@storybook/react-webpack5";
import KanbanBoard from "../components/KanbanBoard";

const meta: Meta<typeof KanbanBoard> = {
  title: "Components/KanbanBoard",
  component: KanbanBoard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

export const Default: Story = {
  args: {},
};
