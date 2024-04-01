import { Card, CardContent, CardHeader, CardFooter } from "./components/Card";

function AppTest() {
  return (
    <div className="flex place-items-center place-content-center h-screen w-full">
      <Card>
        <CardHeader>
          <p className="text-xl">Card Header</p>
        </CardHeader>

        <CardContent>
          <p className="text-lg font-bold">Hello World</p>
          <p className="text-gray-600">This is a test</p>
        </CardContent>

        <CardFooter>
          <p className="text-sm font-bold">Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AppTest;
