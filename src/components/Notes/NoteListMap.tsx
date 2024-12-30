import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NoteListSkeleton } from "./NoteListSkeleton";
import Button from "../UI/Button";

const NoteListMap = ({ notes, setNote }: any) => {
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    const n = notes.notes.find((e: any) => e.id === id);
    setNote(n);
  }, [id]);
  return (
    <>
      {/* if USER IS IN MOBILE IT WILL RENDER   THE LINK, IF USER IS IN DESKTOP IT WILL RENDER THE BUTTON */}
      {notes.notes.map((note: any) => (
        <div key={note.id} className="w-full">
          {/*  DESKTOP */}
          <div className="hidden lg:block">
            <Button variant="listBttn" onClick={() => setId(note.id)}>
              <NoteListSkeleton e={note} />
            </Button>
          </div>
          {/* MOBILE */}
          <Link
            to="/notes/$postId"
            params={{ postId: note.id }}
            className="lg:hidden rounded-md p-2  flex border-b flex-col gap-2 [&.active]:bg-[#f4f5f9] [&.active]:font-bold"
          >
            <NoteListSkeleton e={note} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default NoteListMap;
