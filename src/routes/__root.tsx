import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoArchiveOutline,
  IoBookmarkOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Sidebar } from "../components/sidebar";
const links = [
  {
    id: 1,
    link: "/notes",
    icon: IoHomeOutline,
    name: "Home",
  },
  {
    id: 2,
    link: "/search",
    icon: IoSearchOutline,
    name: "Search",
  },
  {
    id: 3,
    link: "/archived",
    icon: IoArchiveOutline,
    name: "Archived",
  },
  {
    id: 4,
    link: "/tags",
    icon: IoBookmarkOutline,
    name: "Tags",
  },
  {
    id: 5,
    link: "/settings",
    icon: IoSettingsOutline,
    name: "Settings",
  },
];

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />

      {/* mobile nav */}
      <div className="relative flex flex-col lg:hidden mb-14">
        <nav className="fixed bottom-0 left-0 right-0 p-2 bg-white border border-gray-200 shadow-xl shadow-black">
          <div className="flex items-center justify-around max-w-screen-xl mx-auto">
            {links.map((l) => (
              <Link
                key={l.id}
                to={l.link}
                className="flex flex-col items-center p-2 rounded-lg transition-colors [&.active]:font-bold"
              >
                {l.icon && <l.icon className="w-6 h-6" />}
                <span className="hidden mt-1 text-sm">{l.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  ),
});
