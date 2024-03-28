import { Divider } from "./components/Divider";

function AppTest() {
  return (
    <div className=" w-1/2 h-12 mx-auto flex justify-center items-center bg-slate-200 mt-12 br-diver">
      {/* <div className="flex flex-row justify-around items-center gap-4 w-1/2 mx-auto mt-12 bg-slate-100">
        <div className="bg-slate-800 text-lime-200 text-3xl text-center">
          Exemplo
        </div>

        <Divider
          orientation="vertical"
          size="lg"
          dashed={false}
          className="text-red-900"
        />

        <div className="bg-slate-800 text-lime-200 text-3xl text-center">
          Divider
        </div>
      </div>
      <div className="flex flex-col justify-around items-center gap-4 w-1/2 mx-auto mt-12 bg-slate-100">
        <div className="bg-slate-800 text-lime-200 text-3xl text-center">
          Exemplo
        </div>

        <Divider
          orientation="horizontal"
          size="lg"
          dashed={false}
          className="text-red-900 w-full"
        />

        <div className="bg-slate-800 text-lime-200 text-3xl text-center">
          Divider
        </div>
      </div> */}

      <Divider orientation="horizontal" size="lg" dashed={false} className="" />
    </div>
  );
}

export default AppTest;
