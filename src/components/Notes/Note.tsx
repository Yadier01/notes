import { useState } from "react";
import NoNoteSelected from "./NoNoteSelected";
import NoteListMap from "./NoteListMap";
import Button from "../UI/Button";
import * as notes from "../../data.json";
import { Link } from "@tanstack/react-router";
export const Note = () => {
  const [note, setNote] = useState();
  return (
    <div className="flex flex-col h-full min-h-screen gap-4 m-3 lg:border-r lg:gap-0 lg:flex-row lg:m-0">
      <div className="lg:border-r  lg:w-[23rem] fex-none lg:p-4">
        {/* mobile */}
        <Link to="/new-note" className="lg:hidden ">
          <Button variant={"blue"}>+ Create New Note</Button>
        </Link>
        {/* desktop */}
        <Button className="hidden lg:block" variant={"blue"}>
          + Create New Note
        </Button>

        <NoteListMap notes={notes} setNote={setNote} />
      </div>
      <NoNoteSelected note={note} />
    </div>
  );
};
