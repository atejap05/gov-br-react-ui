import { Button } from "./components/Button";

function AppTest() {
  return (
    <div className="flex place-items-center place-content-center h-screen w-full">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button circle>Circle</Button>
      <Button disabled>Disabled</Button>
      <Button active>Active</Button>
      <Button loading>Loading</Button>
    </div>
  );
}

export default AppTest;
