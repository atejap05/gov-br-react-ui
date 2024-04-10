import { Input } from "./components/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

function AppTest() {
  const input01 = useRef<HTMLInputElement>(null);
  const input02 = useRef<HTMLInputElement>(null);
  const input03 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(input01.current?.value);
    console.log(input02.current?.value);
    console.log(input03.current?.value);
  }, []);

  return (
    <div className="flex flex-col gap-4 place-items-center place-content-center h-screen w-full">
      <h3> Sem Label</h3>
      <Input
        ref={input01}
        onChange={value =>
          console.log((value.target as HTMLInputElement).value)
        }
        size="md"
        placeholder="Test Input sem Label"
        type="text"
        id="test-input-sem-label"
      />

      <h3> Com Label</h3>

      <Input
        ref={input02}
        onChange={value =>
          console.log((value.target as HTMLInputElement).value)
        }
        size="md"
        placeholder="Test Input com Label"
        type="text"
        id="test-input-com-label"
        label="Test Input"
      />

      <h3> Com Icon</h3>
      <Input
        ref={input03}
        onChange={value =>
          console.log((value.target as HTMLInputElement).value)
        }
        size="md"
        placeholder="Test Input com Icon"
        type="text"
        id="test-input-com-icon"
        label="Test Input"
        icon={faUser}
      />
    </div>
  );
}

export default AppTest;
