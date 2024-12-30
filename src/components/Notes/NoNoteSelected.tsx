import { NoteSkeleton } from "./NoteSkeleton";

const NoNoteSelected = ({ note }: any) => {
  return (
    <>
      {note === undefined ? (
        <div className="flex-col items-center hidden w-1/2 p-4 lg:flex jstify-center">
          <p className="text-2xl font-bold">No note selected</p>
          <p className="text-gray-600">Select a note to get started</p>
        </div>
      ) : (
        <NoteSkeleton note={note} />
      )}
    </>
  );
};

export default NoNoteSelected;
