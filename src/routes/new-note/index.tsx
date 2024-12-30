import { createFileRoute } from "@tanstack/react-router";
import NewNote from "../../components/Notes/NewNote";

export const Route = createFileRoute("/new-note/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <NewNote />;
}
