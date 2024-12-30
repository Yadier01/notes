import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "../../components/sidebar";
import { Topbar } from "../../components/Topbar";
import { Note } from "../../components/Notes/Note";
export const Route = createFileRoute("/notes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar name="Notes" />
        <Note />
      </div>
    </div>
  );
}
