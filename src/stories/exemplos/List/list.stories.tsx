import { Meta, StoryObj } from "@storybook/react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemCheckbox,
  ListItemText,
} from "../../../components/List";
import { Card } from "../../../components/Card";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../../../components/Divider";

const meta: Meta<typeof List> = {
  title: "Exemplos/List",
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

export const Simples: Story = {
  render: () => (
    <List className="w-full">
      <ListItem>
        <ListItemText primary="Texto Principal 01" secondary="Meta" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Texto Principal 02" secondary="Meta" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Texto Principal 03" secondary="Meta" />
      </ListItem>
    </List>
  ),
};

export const Vertical: Story = {
  render: () => (
    <List
      header={{
        title: "Título (opcional)",
      }}
    >
      <ListItem>
        <ListItemText primary="Texto Principal 01" secondary="Meta" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Texto Principal 02" secondary="Meta" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Texto Principal 03" secondary="Meta" />
      </ListItem>
    </List>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <List
      orientation="horizontal"
      header={{
        title: "Título (opcional)",
      }}
    >
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 01" secondary="Meta" />
      </ListItem>
      <Divider size="sm" orientation="vertical" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 02" secondary="Meta" />
      </ListItem>
      <Divider size="sm" orientation="vertical" />
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 03" secondary="Meta" />
      </ListItem>
    </List>
  ),
};

export const Icon: Story = {
  render: () => (
    <List
      header={{
        title: "Título (opcional)",
      }}
    >
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 01" secondary="Meta" />
      </ListItem>
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 02" secondary="Meta" />
      </ListItem>
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 03" secondary="Meta" />
      </ListItem>
    </List>
  ),
};

export const Select: Story = {
  render: () => (
    <List
      header={{
        title: "Título (opcional)",
      }}
    >
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 01" />
        <ListItemCheckbox
          name="checkbox01"
          value="checkbox01"
          id="checkbox01"
        />
      </ListItem>
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 02" />
        <ListItemCheckbox
          name="checkbox02"
          value="checkbox02"
          id="checkbox02"
        />
      </ListItem>
      <ListItem>
        <ListItemIcon icon={faHeartbeat} />
        <ListItemText primary="Texto Principal 03" />
        <ListItemCheckbox
          name="checkbox03"
          value="checkbox03"
          id="checkbox03"
        />
      </ListItem>
    </List>
  ),
};
