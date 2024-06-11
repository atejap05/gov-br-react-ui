import { Meta, StoryObj } from "@storybook/react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "../../../components/List";
import { faHome, faTable, faUser } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "@/components";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <List>
        <ListItem>
          <ListItemIcon icon={faUser} />
          <ListItemText primary="Minha conta" secondary="Meta" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon icon={faHome} />
          <ListItemText primary="Início" secondary="Meta" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon icon={faTable} />
          <ListItemText primary="Dados" secondary="Meta" />
        </ListItem>
      </List>
    ),
  },
};
