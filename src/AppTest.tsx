import { Divider } from "./components/Divider";

function AppTest() {
  return (
    <div className="flex flex-row justify-between items-start gap-4 w-1/2 mx-auto mt-12">
      <h1 className="bg-slate-800 text-lime-200 text-center">Exemplo</h1>

      <Divider orientation="vertical" size="md" dashed={false} />

      <h1 className="bg-slate-800 text-lime-200 text-center">Divider</h1>
    </div>
  );
}

export default AppTest;
