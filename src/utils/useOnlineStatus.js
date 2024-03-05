import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //Checking if online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    // clean up to avoid memory-leak
    // return () => {
    //     window.removeEventListener("online", handleStatusChange);
    //     window.removeEventListener("offline", handleStatusChange);
    //   };
  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
