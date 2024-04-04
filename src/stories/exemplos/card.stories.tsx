import { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/Card";

const meta: Meta<typeof Card> = {
  title: "Exemplos/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    // Card Simples e completo
    <>
      <h1>Card simples e completo</h1>
      <div className="flex justify-between items-center gap-4">
        <Card>
          <CardContent>
            <img src="https://picsum.photos/id/0/500" alt="Imagem de exemplo" />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <img src="https://picsum.photos/id/0/500" alt="Imagem de exemplo" />
          </CardContent>
        </Card>
      </div>
    </>
  ),
};
