import { createFileRoute, Link } from "@tanstack/react-router";
import * as data from "../../data.json";
import { NoteSkeleton } from "../../components/NoteSkeleton";
export const Route = createFileRoute("/notes/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  const id = Number(postId);
  const note = data.notes.find((e) => e.id === id);
  return <NoteSkeleton note={note} />;
}
