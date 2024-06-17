import { Meta, StoryObj } from "@storybook/react";
import { DateTimePicker } from "../../components/DateTimePicker";

const meta: Meta<typeof DateTimePicker> = {
  title: "components/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {
  args: {
    id: "datepicker01",
    label: "Date Picker",
    placeholder: "Select a date",
  },
};
