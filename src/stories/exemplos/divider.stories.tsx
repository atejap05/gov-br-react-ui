import { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../../components/Divider";

const meta: Meta = {
  title: "Exemplos/Divider",
  component: Divider,
};

export default meta;

type Template = StoryObj<typeof meta>;

export const Default: Template = {};
