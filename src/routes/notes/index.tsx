import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "../../components/sidebar";
import { Topbar } from "../../components/Topbar";
import { Notes } from "../../components/Notes";

export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar />
        <Notes />
      </div>
    </div>
  );
}
