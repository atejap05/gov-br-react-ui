import { Meta, StoryObj } from "@storybook/react";
import { Step } from "../../components/Step";

const meta: Meta<typeof Step> = {
  title: "components/Step",
  component: Step,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: "1rem",
          borderRadius: "0.3rem",
          margin: "14rem 2rem",
          boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)",
        }}
      >
        {Story()}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Step>;

export const Vertical: Story = {
  args: {
    steps: [
      { label: "Step 1", index: 1, active: true },
      { label: "Step 2", index: 2, active: false },
      {
        label: "Step 3",
        index: 3,
        active: false,
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
      },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    steps: [
      { label: "Step 1", index: 1, active: false },
      { label: "Step 2", index: 2, active: true },
      {
        label: "Step 3",
        index: 3,
        active: false,
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
      },
    ],
  },
};

export const LabelLeft: Story = {
  args: {
    direction: "horizontal",
    label: "left",
    steps: [
      { label: "Step 1", index: 1, active: false },
      { label: "Step 2", index: 2, active: true },
      {
        label: "Step 3",
        index: 3,
        active: false,
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
      },
    ],
  },
};

export const LabelRight: Story = {
  args: {
    direction: "horizontal",
    label: "right",
    steps: [
      { label: "Step 1", index: 1, active: false },
      { label: "Step 2", index: 2, active: true },
      {
        label: "Step 3",
        index: 3,
        active: false,
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
      },
    ],
  },
};

export const LabelTop: Story = {
  args: {
    direction: "horizontal",
    label: "top",
    steps: [
      { label: "Step 1", index: 1, active: false },
      { label: "Step 2", index: 2, active: true },
      {
        label: "Step 3",
        index: 3,
        active: false,
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
      },
    ],
  },
};

export const LabelBottom: Story = {
  args: {
    direction: "horizontal",
    label: "bottom",
    steps: [
      { label: "Step 1", index: 1, active: false },
      { label: "Step 2", index: 2, active: true },
      {
        label: "Step 3",
        index: 3,
        active: false,
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
      },
    ],
  },
};

export const Iconed: Story = {
  args: {
    direction: "horizontal",
    steps: [
      { label: "Step 1", index: 1, active: false, icon: "fa-home" },
      { label: "Step 2", index: 2, active: true, icon: "fa-user" },
      {
        label: "Step 3",
        index: 3,
        active: false,
        icon: "fa-envelope",
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
        icon: "fa-check",
      },
    ],
  },
};

export const WithAlert: Story = {
  args: {
    direction: "horizontal",
    steps: [
      {
        label: "Step 1",
        index: 1,
        active: false,
        icon: "fa-home",
        alert: "success",
      },
      {
        label: "Step 2",
        index: 2,
        active: true,
        icon: "fa-user",
        alert: "warning",
      },
      {
        label: "Step 3",
        index: 3,
        active: false,
        icon: "fa-envelope",
        alert: "danger",
      },
      {
        label: "Step 4",
        index: 4,
        active: false,
        icon: "fa-check",
        alert: "info",
      },
    ],
  },
};
