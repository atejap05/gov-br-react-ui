import { Card, CardContent, CardHeader, CardFooter } from "./components/Card";

function AppTest() {
  return (
    <div className="flex place-items-center place-content-center h-screen w-full">
      <Card hover fixed>
        <CardHeader>
          <h1 className="text-2xl font-bold">Card Header</h1>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-bold">Hello World</h1>
          <p className="text-gray-600">This is a test</p>
          <h1 className="text-2xl font-bold">Hello World</h1>
          <p className="text-gray-600">This is a test</p>
        </CardContent>
        <CardFooter>
          <p className="text-2xl font-bold">Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AppTest;
