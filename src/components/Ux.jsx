import Happy from "../media/Happy";
import Neutral from "../media/Neutral";
import Sad from "../media/Sad";
import Unhappy from "../media/Unhappy";
import VeryHappy from "../media/VeryHappy";

export default function Ux({ setIsShowing }) {

  let sad = () =>{
    //Colect data

    setIsShowing(2)
  }

  let unhappy = () =>{
  //Colect data

    setIsShowing(2)
  }
  let neutral = () =>{
    //Colect data

    setIsShowing(2)
  }
  let happy = () =>{
    //Colect data

    setIsShowing(2)
    
  }
  let veryHappy = () =>{
    //Colect data
    
    setIsShowing(2)
  }
  
  return (
    <>
      <div className='flex space-x-10'>
        <div className='flex space-x-5'>
          <svg className='h-10 w-10 min-w-fit my-auto hidden sm:flex'
            xmlns='http://www.w3.org/2000/svg'
            width='110.46'
            height='110.46'
            x='0'
            y='0'
            version='1.1'
            viewBox='-29.809 -29.81 110.46 110.46'
            xmlSpace='preserve'
          >
            <g transform='translate(-29.809 -29.81)'>
              <g>
                <path
                  fill='#007bc0'
                  stroke='none'
                  d='M56.531 79.886h-2.055v4.273h2.113c1.363 0 1.926-1.074 1.891-2.207-.031-1.105-.468-2.066-1.949-2.066zM55.234 0C24.727 0 0 24.727 0 55.229c0 30.505 24.727 55.231 55.234 55.231 30.499 0 55.226-24.727 55.226-55.231C110.46 24.727 85.733 0 55.234 0zm.219 15.588c4.358 0 7.882 3.537 7.882 7.889a7.881 7.881 0 11-15.765 0c0-4.352 3.532-7.889 7.883-7.889zm0 18.693a7.87 7.87 0 017.882 7.877 7.88 7.88 0 01-7.882 7.883 7.885 7.885 0 01-7.883-7.883 7.876 7.876 0 017.883-7.877zm-19.16-18.693c4.355 0 7.887 3.537 7.887 7.889a7.888 7.888 0 01-15.774 0 7.89 7.89 0 017.887-7.889zm0 18.693c4.355 0 7.887 3.518 7.887 7.877a7.886 7.886 0 01-7.887 7.883 7.884 7.884 0 01-7.887-7.883 7.874 7.874 0 017.887-7.877zm0 19.172a7.887 7.887 0 017.887 7.885 7.886 7.886 0 01-7.887 7.883 7.884 7.884 0 110-15.768zm9.285 33.53c0 1.941-.055 4.332-2.602 6.129-1.664 1.168-3.633 1.41-5.402 1.41-1.777 0-3.738-.242-5.41-1.41-2.543-1.797-2.613-4.188-2.613-6.129V75.907h5.309v11.057c.02 1.051.117 1.879.934 2.547.563.469 1.047.621 1.789.629.719-.008 1.203-.16 1.762-.629.813-.668.922-1.496.941-2.547V75.907h5.293v11.076zm9.875-33.53a7.88 7.88 0 017.882 7.885 7.88 7.88 0 01-7.882 7.883 7.885 7.885 0 010-15.768zm5.62 33.753c-1.012.723-2.159.992-5.112.992l-1.535-.031v5.969h-4.625V75.907h7.633c3.722 0 6.022 2.242 6.022 6.271 0 2.161-.844 3.966-2.383 5.028zm19.055-5.789c-1.816-1.516-2.531-1.406-3.949-1.406-2.766 0-4.688 2.102-4.688 5.094 0 3.008 1.949 5.09 4.711 5.09 1.5 0 2.242-.203 3.926-1.441v4.723c-1.746.852-2.734 1.094-4.414 1.094-5.508 0-9.387-3.914-9.387-9.465 0-5.502 3.965-9.58 9.332-9.58 1.645 0 2.711.266 4.469 1.119v4.772zm-5.957-12.196a7.884 7.884 0 110-15.768c4.348 0 7.887 3.531 7.887 7.885 0 4.351-3.539 7.883-7.887 7.883zm0-19.18a7.884 7.884 0 01-7.887-7.883 7.874 7.874 0 017.887-7.877c4.348 0 7.887 3.518 7.887 7.877 0 4.352-3.539 7.883-7.887 7.883zm0-18.68a7.886 7.886 0 01-7.887-7.885 7.889 7.889 0 017.887-7.889c4.348 0 7.887 3.537 7.887 7.889s-3.539 7.885-7.887 7.885z'
                ></path>
              </g>
            </g>
          </svg>
          <h1 className='text-xl pb-3 my-auto max-w-xs'>¿Qué tan satisfecho estás con nuestros servicios hoy?</h1>
        </div>
        <button class='hover:bg-gray-100 rounded p-2 h-fit' onClick={() => setIsShowing(-1)}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>

      <div className='flex space-x-4 justify-center'>
        <button className='hover:bg-gray-100 p-3 rounded-xl duration-100' onClick={sad}>
          <Sad className='h-10 w-10'/>
        </button>

        <button className='hover:bg-gray-100 p-3 rounded-xl duration-100' onClick={unhappy}>
          <Unhappy className='h-10 w-10'/>
        </button>

        <button className='hover:bg-gray-100 p-3 rounded-xl duration-100' onClick={neutral}>
          <Neutral className='h-10 w-10'/>
        </button>
        <button className='hover:bg-gray-100 p-3 rounded-xl duration-100' onClick={happy}>
          <Happy className='h-10 w-10'/>
        </button>

        <button className='hover:bg-gray-100 p-3 rounded-xl duration-100' onClick={veryHappy}>
          <VeryHappy className='h-10 w-10'/>
        </button>
      </div>
      <div className='flex justify-between text-lg'>
        <h2>Insatisfecho</h2>
        <h2>Satisfecho</h2>
      </div>
    </>
  )
}
