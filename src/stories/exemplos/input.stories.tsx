import { Meta, StoryObj } from "@storybook/react";
import { faUser, faMailBulk, faKey } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const meta: Meta<typeof Input> = {
  title: "Exemplos/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const BasicLogin: Story = {
  render: () => (
    <Card>
      <CardContent>
        <form className="flex flex-col gap-4 justify-between items-center">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-2xl font-bold mb-1">Basic Login Form</h1>
            <p className="text-center text-sm">
              Fill in the fields below to access your account
            </p>
          </div>

          <Input
            id="input-basic"
            label="Full Name"
            placeholder="Your full name ..."
            type="text"
            icon={faUser}
          />
          <Input
            id="input-basic"
            label="Email"
            placeholder="Your email ..."
            type="email"
            icon={faMailBulk}
          />
          <Input
            id="input-basic"
            label="Password"
            placeholder="Your password ..."
            type="password"
            icon={faKey}
          />

          <Button>Login</Button>
        </form>
      </CardContent>
    </Card>
  ),
};

export const BasicSearch: Story = {
  render: () => (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-4 justify-between items-center">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-2xl font-bold mb-1">Basic Search</h1>
            <p className="text-center text-sm">
              Fill in the field below to search for something
            </p>
          </div>
          <Input id="input-search" label="Make a search" type="search" />
        </div>
      </CardContent>
    </Card>
  ),
};
