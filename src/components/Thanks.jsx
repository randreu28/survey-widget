import { useEffect } from "react";

import Logo from "../media/Logo";

export default function Thanks({ setIsShowing }) {
  /* wait 2500, then unmount */
  useEffect(() => {
    setTimeout(function () {
      setIsShowing(-1);
    }, 2500);
  }, [setIsShowing]);

  return (
    <div className="flex justify-between space-x-5">
      <Logo className="h-6 w-6" />
      <h1>Gracias!</h1>
    </div>
  );
}
