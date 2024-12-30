import { Link } from "@tanstack/react-router";
import { IoIosArrowBack } from "react-icons/io";
import { IoArchiveOutline, IoTrashBinOutline } from "react-icons/io5";
import { CancelPortal } from "../UI/CancelPortal";
import PortalHook from "../Hooks/portalHook";
import useStorePortal from "../../store/portalStore";

const MobileNoteTop = ({ submitHanlder }: any) => {
  const { cancelHandlerS } = PortalHook();
  const { cancel } = useStorePortal();

  return (
    <div className="flex items-center justify-between w-full text-gray-600 lg:hidden">
      <Link to="/notes" className="flex items-center gap-2">
        <IoIosArrowBack />
        Go back
      </Link>
      {cancel && <CancelPortal />}
      <span className="flex items-center gap-3 ">
        <IoTrashBinOutline size={17} />
        <IoArchiveOutline size={17} />
        <button onClick={cancelHandlerS}>Cancel</button>
        <button onClick={submitHanlder} className="text-sky-500">
          Save Note
        </button>
      </span>
    </div>
  );
};

export default MobileNoteTop;
