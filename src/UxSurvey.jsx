import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

import Consent from "./components/Consent.jsx";
import Ux from "./components/Ux.jsx";
import Thanks from "./components/Thanks.jsx";

export default function UxSurvey() {
  const [isShowing, setIsShowing] = useState(-1);
  const [isAnimationDone, setAnimationDone] = useState(0);

  /* Espera 25000ms, luego monta el Popup. */
  useEffect(() => {
    setTimeout(function () {
      setIsShowing(0);
    }, 2500);
  }, [setIsShowing]);

  /* Por implementar:

  - Convencionalismos Aria para accesibilidad

  - Multilenguaje. leer el tag 'lang' de html y 
  en función de eso cambiar a catalán/español/ingles

  - Dark mode?
  */

  return (
    <>
      <Transition
        show={isShowing !== -1}
        appear={true}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed z-[999] p-5 bottom-0 right-0 m-3 sm:m-6 text-black bg-white rounded-xl space-y-3">
          <Transition
            show={isShowing === 0}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setAnimationDone(1);
            }}
          >
            <Consent setIsShowing={setIsShowing} />
          </Transition>

          <Transition
            show={isShowing === 1 && isAnimationDone === 1}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setAnimationDone(2);
            }}
          >
            <Ux setIsShowing={setIsShowing} />
          </Transition>

          <Transition
            show={isShowing === 2 && isAnimationDone === 2}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Thanks setIsShowing={setIsShowing} />
          </Transition>
        </div>
      </Transition>
    </>
  );
}
