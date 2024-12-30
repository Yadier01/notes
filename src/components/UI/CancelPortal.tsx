import { createPortal } from "react-dom";
import PortalHook from "../Hooks/portalHook";
import { Link } from "@tanstack/react-router";
import Button from "./Button";
import useStorePortal from "../../store/portalStore";

export const CancelPortal = () => {
  const { cancelHandlerS, unCancelHandler } = PortalHook();
  return (
    <>
      {createPortal(
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen min-h-screen scroll bg-black/40 ">
          <div className="w-full p-4 m-4 space-y-4 bg-white rounded-lg">
            <h4>Are you sure you want to delete</h4>
            <div className="flex items-center justify-end gap-2">
              <Link to="/notes" className="text-sky-500">
                <Button
                  className="w-auto text-white"
                  variant="delete"
                  size={"sm"}
                  onClick={unCancelHandler}
                >
                  Delete
                </Button>
              </Link>
              <Button className="w-auto" onClick={unCancelHandler} size={"sm"}>
                Cancel
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
