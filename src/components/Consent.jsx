import Logo from "../media/Logo";
import XIcon from "../media/XIcon";

export default function Consent({ setIsShowing }) {
  return (
    <>
      <div className="flex space-x-10">
        <div className="flex space-x-5">
          <Logo className="h-10 w-10 min-w-fit my-auto hidden sm:flex" />
          <h1 className="text-xl pb-3 my-auto max-w-xs">
            ¡Ayudanos a mejorar nuestros servicios!
          </h1>
        </div>
        <button
          className="hover:bg-gray-100 rounded p-2 h-fit"
          onClick={() => setIsShowing(-1)}
        >
          <XIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="space-x-5 flex justify-end pb-3 border-b-2">
        <button
          onClick={() => setIsShowing(-1)}
          className="text-blue-500 py-2 px-3 hover:bg-blue-100 rounded-lg duration-100 font-semibold"
        >
          No, gracias
        </button>
        <button
          onClick={() => setIsShowing(1)}
          className="text-white bg-blue-600 rounded-lg py-2 px-3 font-semibold hover:bg-opacity-90 duration-100"
        >
          Ayudanos
        </button>
      </div>
      <p className="max-w-fit text-sm text-gray-600 pt-1">
        Al continuar, accede que utilicemos sus respuestas y datos de usuario
        para mejorar nuestros servicios.
      </p>
    </>
  );
}
