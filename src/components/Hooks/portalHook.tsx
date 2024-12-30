import { useState } from "react";
import useStorePortal from "../../store/portalStore";

const PortalHook = () => {
  const { cancel, cancelHandler } = useStorePortal();

  const cancelHandlerS = () => {
    console.log("cancel");
    cancelHandler();

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const unCancelHandler = () => {
    cancelHandler();
    console.log(cancel);
    document.body.style.overflow = "unset";
  };

  console.log(cancel);
  return { cancelHandlerS, unCancelHandler };
};

export default PortalHook;
