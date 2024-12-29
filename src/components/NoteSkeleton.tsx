import { Link } from "@tanstack/react-router";
import {
  IoBookmarkOutline,
  IoTimeOutline,
  IoTrashBinOutline,
  IoArchiveOutline,
} from "react-icons/io5";

export const NoteSkeleton = ({ note }: any) => {
  console.log(note);
  return (
    <>
      <main className="p-4 bg-white border-r lg:px-4 lg:w-full lg:block">
        <div className="flex justify-between w-full text-gray-600 lg:hidden">
          <Link to="/notes">Go back</Link>
          <span className="flex items-center gap-4 ">
            <IoTrashBinOutline size={20} />
            <IoArchiveOutline size={20} />
            <button>Cancel</button>
            <button className="text-sky-600 ">Save Note</button>
          </span>
        </div>

        <div className="container py-4 my-3 space-y-2 lg:my-0 border-y border-zinc-300 lg:border-y-0 ">
          <h3 className="text-3xl font-bold">{note?.name}</h3>
          <div className="grid grid-cols-2 space-y-1 text-gray-600 lg:w-max">
            <span className="flex items-center gap-3">
              <IoBookmarkOutline />
              <p className="text-sm">Tags</p>
            </span>

            <ul className="flex flex-wrap items-center gap-2">
              {note?.tags.map((e: any) => (
                <li className="text-sm" key={e.id}>
                  {e.tag}
                </li>
              ))}
            </ul>

            <span className="flex items-center gap-3">
              <IoTimeOutline />
              <p className="text-sm">Last Edited</p>
            </span>
            <p className="text-sm">{note?.lastEdited}</p>
          </div>
        </div>

        <p className="whitespace-pre text-wrap">{note?.content}</p>
      </main>

      <div className="flex-col hidden w-1/3 gap-4 p-4 lg:flex">
        <button className="p-4 bg-red-500 border-2">Archive note</button>
        <button>delete note</button>
      </div>
    </>
  );
};
