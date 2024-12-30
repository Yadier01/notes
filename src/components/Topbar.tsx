import { IoSettingsOutline } from "react-icons/io5";
export const Topbar = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-between w-full h-20 px-5 border-b-2 ">
      <p className="w-full text-2xl font-bold text">{name}</p>
      <div className="items-center justify-end hidden w-full gap-4 lg:flex">
        <input
          type="text"
          placeholder="Search by title, content, or tags..."
          className="w-1/2 p-2 border rounded-lg outline-none"
        />
        <button>
          <IoSettingsOutline size={25} />
        </button>
      </div>
    </div>
  );
};
