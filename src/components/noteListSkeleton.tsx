import { Link } from "@tanstack/react-router";
import { NoteSkeleton } from "./NoteSkeleton";
import { useEffect, useState } from "react";
export const NoteListSkeleton = ({ notes }: any) => {
  const [id, setId] = useState<number>(0);
  const [note, setNote] = useState();
  useEffect(() => {
    const n = notes.notes.find((e: any) => e.id === id);
    setNote(n);
  }, [id]);
  return (
    <div className="flex flex-col min-h-screen gap-4 m-3 lg:border-r wfull lg:gap-0 lg:flex-row lg:m-0">
      <div className="flex-noe border-r  w-[23rem] lg:p-4">
        <button className="w-full p-2 bg-[#325bfd] text-white rounded-lg">
          + Create New Note
        </button>
        {notes.notes.map((e: any) => (
          <div key={e.id} className="w-full ">
            <button
              onClick={() => {
                setId(e.id);
              }}
              className="hidden w-full  lg:flex rounded-md p-2 border-b
        border-zinc-300  flex-col gap-2 [&.active]:bg-[#f4f5f9] [&.active]:font-bold"
            >
              <NoteListSkeletonTrue e={e} />
            </button>
            <Link
              to="/notes/$postId"
              params={{ postId: e.id }}
              className="lg:hidden rounded-md p-2  flex border-b flex-col gap-2 [&.active]:bg-[#f4f5f9] [&.active]:font-bold"
            >
              <NoteListSkeletonTrue e={e} />
            </Link>
          </div>
        ))}
      </div>
      {note === undefined ? (
        <div className="flex-col items-center hidden w-1/2 p-4 lg:flex jstify-center">
          <p className="text-2xl font-bold">No note selected</p>
          <p className="text-gray-600">Select a note to get started</p>
        </div>
      ) : (
        <NoteSkeleton note={note} />
      )}
    </div>
  );
};

export const NoteListSkeletonTrue = ({ e }: any) => {
  return (
    <>
      <h3 className="font-bold text-left">{e.name}</h3>
      <ul className="flex gap-2">
        {e.tags.map((e: any) => (
          <li className="bg-[#C5C6D0] p-1 text-xs rounded-md " key={e.id}>
            {e.tag}
          </li>
        ))}
      </ul>
      <p className="text-left">{e.lastEdited}</p>
    </>
  );
};
