import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AppTest() {
  return (
    <div className="flex place-items-center place-content-center h-screen w-full">
      <div className="w-1/2">
        <h1>Tipe bloco</h1>
        <div className="flex flex-col gap-3 justify-between items-center bg-slate-800 py-8 px-6">
          <Button variant="primary" dark block>
            Primary
          </Button>
          <Button variant="secondary" dark block>
            Secondary
          </Button>
          <Button variant="secondary" circle>
            <FontAwesomeIcon icon={faBarChart} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppTest;
