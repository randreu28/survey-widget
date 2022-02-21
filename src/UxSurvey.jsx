import Consent from './components/Consent.jsx'

export default function UxSurvey() {

  let consent = false;
 /*  function consent(){
    consent = true;
  } */

  return (
    <div className='fixed z-[999] p-5 bottom-0 right-0 m-6 text-black bg-white rounded-xl space-y-3'>
      <Consent/>
    </div>
  )
}
