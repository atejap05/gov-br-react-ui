import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Button> = {
  title: "Exemplos/Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Bloco: Story = {
  render: () => (
    <div className="flex flex-col place-items-center place-content-center h-screen w-full">
      <h1>Tipo bloco</h1>
      <div className="flex flow-row gap-4 justify-between items-center w-full">
        <div className="w-1/2">
          <h3>Light</h3>
          <div className="flex flex-col gap-3 justify-between items-center  py-8 px-6">
            <Button variant="primary" block>
              Primary
            </Button>
            <Button variant="secondary" block>
              Secondary
            </Button>
            <Button variant="tertiary" block>
              Tertiary
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <h3>Dark</h3>
          <div className="flex flex-col gap-3 justify-between items-center bg-slate-800 py-8 px-6">
            <Button variant="primary" dark block>
              Primary
            </Button>
            <Button variant="secondary" dark block>
              Secondary
            </Button>
            <Button variant="tertiary" dark block>
              Tertiary
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Circular: Story = {
  render: () => (
    <div className="flex flex-col place-items-center place-content-center h-screen w-full">
      <h1>Tipo circular</h1>
      <div className="flex flow-row gap-4 justify-between items-center w-full">
        <div className="w-1/2">
          <h3>Light</h3>
          <div className="flex gap-8 justify-center items-center  py-8 px-6">
            <Button icon={faCoffee} variant="primary" circle />
            <Button icon={faCoffee} variant="secondary" circle />
            <Button icon={faCoffee} variant="tertiary" circle />
          </div>
        </div>
        <div className="w-1/2">
          <h3>Dark</h3>
          <div className="flex gap-8 justify-center items-center bg-slate-800 py-8 px-6">
            <Button icon={faCoffee} variant="primary" dark circle />
            <Button icon={faCoffee} variant="secondary" dark circle />
            <Button icon={faCoffee} variant="tertiary" dark circle />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Enfases: Story = {
  render: () => (
    <div className="flex flex-col place-items-center place-content-center h-screen w-full">
      <h1>Enfases</h1>
      <div className="flex flow-row gap-4 justify-between items-center w-full">
        <div className="w-1/2">
          <h3>Light</h3>
          <div className="flex gap-3 justify-start items-center py-8 px-6">
            <Button icon={faCoffee} variant="primary">
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>
        </div>
        <div className="w-1/2">
          <h3>Dark</h3>
          <div className="flex gap-3 justify-start items-center bg-slate-800 py-8 px-6">
            <Button variant="primary" dark>
              Primary
            </Button>
            <Button variant="secondary" dark>
              Secondary
            </Button>
            <Button variant="tertiary" dark>
              Tertiary
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Densidades: Story = {
  render: () => (
    <div className="flex flex-col place-items-center place-content-center h-screen w-full">
      <h1>Densidades</h1>
      <div className="flex flow-row gap-4 justify-between items-center w-full">
        <div className="w-1/2">
          <h3>Regular</h3>
          <div className="flex gap-3 justify-center items-center  py-8 px-6">
            <Button variant="secondary" size="xs">
              Small
            </Button>
            <Button variant="secondary" size="md">
              Medium
            </Button>
            <Button variant="secondary" size="lg">
              Large
            </Button>
          </div>
        </div>
        <div className="w-1/2 text-center">
          <h3>Circular</h3>
          <div className="flex gap-3 justify-center items-center py-8 px-6">
            <Button variant="secondary" circle size="xs">
              🎪
            </Button>
            <Button variant="secondary" circle size="md">
              👙
            </Button>
            <Button variant="secondary" circle size="lg">
              🎯
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Estados: Story = {
  render: () => (
    <div className="flex flex-col place-items-center place-content-center h-screen w-full">
      <h1>Estados</h1>
      <div className="flex flow-row gap-4 justify-between items-center w-full">
        <div className="w-1/2">
          <h3>Light</h3>
          <div className="flex gap-3 justify-center items-center  py-8 px-6">
            <Button variant="primary" active>
              Active
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" loading>
              Loading
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <h3>Dark</h3>
          <div className="flex gap-3 justify-center items-center bg-slate-800 py-8 px-6">
            <Button variant="primary" dark active>
              Active
            </Button>
            <Button variant="primary" dark disabled>
              Disabled
            </Button>
            <Button variant="primary" dark loading>
              Loading
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
