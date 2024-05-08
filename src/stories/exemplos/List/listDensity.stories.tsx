import { Meta, StoryObj } from "@storybook/react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "../../../components/List";
import { Card } from "../../../components/Card";
import { Divider } from "../../../components/Divider";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof List> = {
  title: "Exemplos/List/Density",
  component: List,
  parameters: {
    layout: "centered",
  },
  decorators: [
    Story => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List
      header={{
        title: "High Density (default)",
      }}
    >
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 01" secondary="Meta" />
      </ListItem>
      <Divider size="sm" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 02" secondary="Meta" />
      </ListItem>
      <Divider size="sm" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 03" secondary="Meta" />
      </ListItem>
    </List>
  ),
};

export const Medium: Story = {
  render: () => (
    <List
      density="medium"
      header={{
        title: "Medium Density",
      }}
    >
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 01" secondary="Meta" />
      </ListItem>
      <Divider size="sm" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 02" secondary="Meta" />
      </ListItem>
      <Divider size="sm" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 03" secondary="Meta" />
      </ListItem>
    </List>
  ),
};

export const Low: Story = {
  render: () => (
    <List
      density="low"
      header={{
        title: "Low Density",
      }}
    >
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 01" secondary="Meta" />
      </ListItem>
      <Divider size="sm" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 02" secondary="Meta" />
      </ListItem>
      <Divider size="sm" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 03" secondary="Meta" />
      </ListItem>
    </List>
  ),
};
