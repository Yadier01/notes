import { Link } from "@tanstack/react-router";
import {
  IoBookmarkOutline,
  IoTimeOutline,
  IoTrashBinOutline,
  IoArchiveOutline,
} from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../UI/Button";

export const NoteSkeleton = ({ note }: any) => {
  console.log(note);
  return (
    <>
      <main className="p-4 bg-white border-r lg:px-4 lg:w-full lg:block">
        <div className="flex items-center justify-between w-full text-gray-600 lg:hidden">
          <Link to="/notes" className="flex items-center gap-2">
            <IoIosArrowBack />
            Go back
          </Link>
          <span className="flex items-center gap-3 ">
            <IoTrashBinOutline size={17} />
            <IoArchiveOutline size={17} />
            <button>Cancel</button>
            <button className="text-sky-500">Save Note</button>
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
        <Button>Archive note</Button>
        <Button variant="delete">Delete Note</Button>
      </div>
    </>
  );
};
