import { Link } from "@tanstack/react-router";

export const Sidebar = () => {
  return (
    <div className="hidden p-4 text-gray-600 border lg:block w-60">
      <p className="m-3">NOTES</p>
      <span className="flex flex-col border-b">
        <Link
          to="/notes"
          className="p-2 [&.active]:bg-[#f4f5f9] [&.active]:font-bold "
        >
          All Notes
        </Link>
        <Link
          to="/archived"
          className="p-2 [&.active]:bg-[#f4f5f9] [&.active]:font-bold"
        >
          Archived notes
        </Link>
      </span>
      <div className="p-2 space-y-2">
        <p className="text-sm font-bold text-gray-500">Tags</p>
        <ul className="flex flex-col gap-4 ">
          <li>Cooking</li>
          <li>Dev</li>
          <li>Fitness</li>
          <li>Health</li>
          <li>Personal</li>
          <li>React</li>
          <li>Recipes</li>
          <li>Shopping</li>
          <li>Travel</li>
          <li>Typescript</li>
        </ul>
      </div>
    </div>
  );
};
