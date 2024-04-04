import { Avatar } from "./components/Avatar";

function AppTest() {
  return (
    <div className="flex place-items-center place-content-center h-screen w-full">
      <Avatar
        icon
        size="sm"
        src="https://avatars.githubusercontent.com/u/67137854?v=4"
        alt="Fulano da Silva"
        className="bg-red-200 text-red-100"
      />
    </div>
  );
}

export default AppTest;
