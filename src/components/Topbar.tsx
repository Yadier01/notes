export const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-5 border-b-2 ">
      <p className="text-2xl font-bold text">All Notes</p>
      <div className="hidden lg:flex">
        <input type="text" />
        <button>C</button>
      </div>
    </div>
  );
};
