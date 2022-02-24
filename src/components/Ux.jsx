import Happy from "../media/Happy";
import Neutral from "../media/Neutral";
import Sad from "../media/Sad";
import Unhappy from "../media/Unhappy";
import VeryHappy from "../media/VeryHappy";
import Logo from "../media/Logo";
import XIcon from "../media/XIcon";

export default function Ux({ setIsShowing }) {
  let dataHandler = (e) => {
    //Colect data
    console.log(e);

    setIsShowing(2);
  };

  return (
    <>
      <div className="flex space-x-10">
        <div className="flex space-x-5">
          <Logo className="h-10 w-10 min-w-fit my-auto hidden sm:flex" />
          <h1 className="sm:text-xl pb-3 my-auto max-w-xs">
            ¿Qué tan satisfecho estás con nuestros servicios hoy?
          </h1>
        </div>
        <button
          className="hover:bg-gray-100 rounded p-2 h-fit"
          onClick={() => setIsShowing(-1)}
        >
          <XIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="flex space-x-4 justify-center pb-1.5">
        <button
          className="hover:bg-gray-100 p-3 rounded-xl duration-100"
          onClick={() => dataHandler("Sad")}
        >
          <Sad className="h-5 w-5 sm:h-10 sm:w-10" />
        </button>

        <button
          className="hover:bg-gray-100 p-3 rounded-xl duration-100"
          onClick={() => dataHandler("Unhappy")}
        >
          <Unhappy className="h-5 w-5 sm:h-10 sm:w-10" />
        </button>

        <button
          className="hover:bg-gray-100 p-3 rounded-xl duration-100"
          onClick={() => dataHandler("Neutral")}
        >
          <Neutral className="h-5 w-5 sm:h-10 sm:w-10" />
        </button>
        <button
          className="hover:bg-gray-100 p-3 rounded-xl duration-100"
          onClick={() => dataHandler("Happy")}
        >
          <Happy className="h-5 w-5 sm:h-10 sm:w-10" />
        </button>

        <button
          className="hover:bg-gray-100 p-3 rounded-xl duration-100"
          onClick={() => dataHandler("VeryHappy")}
        >
          <VeryHappy className="h-5 w-5 sm:h-10 sm:w-10" />
        </button>
      </div>
      <div className="flex justify-between sm:text-lg">
        <h2>Insatisfecho</h2>
        <h2>Satisfecho</h2>
      </div>
    </>
  );
}
