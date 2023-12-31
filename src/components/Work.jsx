import React from 'react';
import Quiz from '../assets/Quiz.jpeg';
import Weather from '../assets/Weather.jpeg';
import Restaurant from '../assets/Restaurant.jpeg';
import TextUtils from '../assets/TextUtils.jpeg'

const Work = () => {
  return (
    <div name='/work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Quiz})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Quiz Application 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://625662349977633996427c19--charming-macaron-e25734.netlify.app/' target='blank'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BhuwanPant/quiz-main'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Weather Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://flourishing-madeleine-c882a3.netlify.app/'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BhuwanPant/weather'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TextUtils})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Text-utility App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://dulcet-empanada-045eaf.netlify.app/'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BhuwanPant/text-utils'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Restaurant})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Restaurant Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://luxury-jelly-d9f853.netlify.app/'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BhuwanPant/Restaurant-main'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Work;
