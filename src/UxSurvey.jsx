import Consent from './components/Consent.jsx'
import Ux from './components/Ux.jsx'
import Thanks from './components/Thanks.jsx'

import { useState } from 'react'

export default function UxSurvey() {

  const [isShowing, setIsShowing] = useState(0) 
  /* Por ahora es visible nada más cargar, 
  pero habría que implementar un conteo antes de preguntar */

  /* Haría falta multilenguaje también. leer el tag lang de html y 
  en función de eso cambiar a catalán/español/ingles  */

  return (
    <>
      {isShowing !== -1 ?
        <div className='fixed z-[999] p-5 bottom-0 right-0 m-6 text-black bg-white rounded-xl space-y-3'>

          {isShowing === 0 ?
            <Consent setIsShowing={setIsShowing} /> : <></>
          }

          {isShowing === 1 ?
            <Ux setIsShowing={setIsShowing}/> : <></>
          }

          {isShowing === 2 ?
            <Thanks setIsShowing={setIsShowing} /> : <></>
          }
        </div>

        : <></>}
    </>
  )
}
