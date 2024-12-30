export const NoteListSkeleton = ({ e }: any) => {
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
