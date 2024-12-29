import { NoteListSkeleton } from "./noteListSkeleton";
import * as data from "../data.json";

export const Notes = () => {
  return (
    <div className="w-full h-full">
      <NoteListSkeleton notes={data} />
    </div>
  );
};
