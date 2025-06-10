import React from 'react'
import Font from 'next/font/local'
import {Open_Sans} from 'next/font/google'
import { currentInfo, hidden } from './utils/utils';
const auro = Font({src:"../../public/aurochs-heavy.woff2"});
const OS = Open_Sans({weight:"400",subsets:["latin"]})
function Currentmovie() {
  const {setStatus} = hidden();
  const {currentmovie} = currentInfo();
  const {title,actors,year,rating,imdb,image} = currentmovie;
  return (
    <div className='w-full h-screen flex justify-center items-center fixed left-0 right-0 bottom-0 z-50 top-0 bg-[oklab(0 0 0/0.2) backdrop-blur-sm'>
      <div className={`${auro.className} bg-[#141435] overflow-hidden rounded-[8px] w-[22.15rem] h-[90%]`}>
        <div className='IMAGE relative w-full h-[50%] bg-white'>
     <img className='w-full h-full object-cover' src={image} alt={image} />
          <div onClick={setStatus} className='w-[2rem]  text-white top-[1em] right-[1em] absolute h-[2rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="white" className="w-full text-white"><path d="M4.88461 28.118C3.35645 26.642 2.13753 24.8765 1.29899 22.9245C0.460445 20.9724 0.0190652 18.8729 0.000604108 16.7484C-0.017857 14.6239 0.38697 12.5171 1.19146 10.5507C1.99596 8.58438 3.18401 6.79795 4.68629 5.29567C6.18857 3.79338 7.97501 2.60533 9.94135 1.80084C11.9077 0.996345 14.0146 0.591518 16.139 0.609979C18.2635 0.62844 20.363 1.06982 22.3151 1.90836C24.2671 2.74691 26.0327 3.96582 27.5086 5.49399C30.4231 8.51162 32.0359 12.5533 31.9994 16.7484C31.9629 20.9436 30.2802 24.9566 27.3137 27.9231C24.3472 30.8896 20.3342 32.5723 16.139 32.6088C11.9439 32.6452 7.90225 31.0325 4.88461 28.118ZM18.4366 16.806L22.9646 12.278L20.7086 10.022L16.1966 14.55L11.6686 10.022L9.41261 12.278L13.9406 16.806L9.41261 21.334L11.6686 23.59L16.1966 19.062L20.7246 23.59L22.9806 21.334L18.4526 16.806H18.4366Z" fill="currentColor"></path></svg>
          </div>
        </div>
        <div className='flex p-[1.5rem] gap-[10px] flex-col'>


          <div className='w-full  flex flex-col gap-[.5rem] px-[1rem] py-[.75rem] bg-[#ffffff0c] rounded-[5.008px] h-[4.6375rem]'>
                <div className='w-full gap-[5.008px] text-[#ffffff7f] flex  h-[1.05rem]'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 lg:size-[clamp(0.563rem,calc(0.063rem+0.781vw),1rem)]"><g><g clipPath="url(#clip0_3269_11044)"><path d="M13.29 3.28H12.51C12.09 1.96 10.86 1 9.41 1H6.41C4.95 1 3.73 1.96 3.3 3.28H2.52C2.23 3.28 2 3.51 2 3.8V4.75C2 5.04 2.23 5.28 2.52 5.28H3.3C3.73 6.59 4.95 7.55 6.41 7.55H9.41C10.86 7.55 12.09 6.59 12.51 5.28H13.29C13.58 5.28 13.82 5.04 13.82 4.75V3.8C13.82 3.51 13.58 3.28 13.29 3.28ZM6.3 5.28C5.75 5.28 5.3 4.83 5.3 4.28C5.3 3.73 5.75 3.28 6.3 3.28C6.85 3.28 7.3 3.73 7.3 4.28C7.3 4.83 6.85 5.28 6.3 5.28ZM9.57 5.28C9.01 5.28 8.57 4.83 8.57 4.28C8.57 3.73 9.01 3.28 9.57 3.28C10.13 3.28 10.56 3.73 10.56 4.28C10.56 4.83 10.12 5.28 9.57 5.28Z" fill="currentcolor"></path><path d="M3.49126 9.64891C3.31126 9.00891 3.79126 8.37891 4.45126 8.37891H11.3713C12.0313 8.37891 12.5013 9.00891 12.3213 9.64891L12.1213 10.3689L7.92126 11.2089L3.68126 10.3389L3.49126 9.64891Z" fill="currentcolor"></path><path d="M13.8195 10.9688V13.5087H12.9295V12.0988H11.6195L10.8795 14.7287C10.7595 15.1487 10.3695 15.4487 9.92953 15.4487H5.87953C5.43953 15.4487 5.04953 15.1487 4.92953 14.7287L4.18953 12.0988H2.91953V13.5087H2.01953V10.9688H3.85953L6.31953 11.4787L7.91953 13.1187L9.50953 11.4887L12.1295 10.9688H13.8195Z" fill="currentcolor"></path></g></g><defs><clipPath id="clip0_3269_11044"><rect width="11.82" height="14.45" fill="currentcolor" transform="translate(2 1)"></rect></clipPath></defs></svg>
               <p className={`${OS.className} text-[#ffffff7f] font-[400] text-[.75rem]`}>Title</p>
                </div>
                <div className='w-full  text-[#00fb93] h-[1.5875rem]'>{title}</div>
          </div>

          <div className='w-full  flex flex-col gap-[.5rem] px-[1rem] py-[.75rem] bg-[#ffffff0c] rounded-[5.008px] h-[4.6375rem]'>
                <div className='w-full gap-[5.008px] text-[#ffffff7f] flex  h-[1.05rem]'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-4 lg:size-[clamp(0.563rem,calc(0.063rem+0.781vw),1rem)]"><g><path d="M15.9994 4.10889C15.9994 4.10889 14.5577 5.12754 12.0972 4.27344C9.63679 3.41934 8.09315 4.89247 8.09315 4.89247C8.09315 4.89247 6.55733 3.41151 4.08906 4.27344C1.62862 5.12754 0.186841 4.10889 0.186841 4.10889C0.186841 4.10889 -0.150098 12.6969 6.04017 11.1846C6.71405 11.0201 7.41927 10.2913 8.08531 10.307C8.75919 10.2913 9.45657 11.0201 10.1304 11.1846C16.3286 12.6891 15.9838 4.10889 15.9838 4.10889H15.9994ZM2.48273 6.65552C2.48273 6.65552 3.01556 6.78873 3.54839 6.71037C4.72376 6.53798 6.52599 6.33425 6.94912 8.44208C6.94912 8.44208 3.38384 10.4324 2.47489 6.65552H2.48273ZM9.23717 8.44208C9.66814 6.33425 11.4625 6.53798 12.6379 6.71037C13.1707 6.78873 13.7036 6.65552 13.7036 6.65552C12.8025 10.4324 9.22933 8.44208 9.22933 8.44208H9.23717Z" fill="currentcolor"></path></g></svg>
 <p className={`${OS.className} text-[#ffffff7f] font-[400] text-[.75rem]`}>Actors</p>
                </div>
                <div className='w-full  text-[#00fb93] h-[1.5875rem]'>{actors}</div>
          </div>
<div className="w-full h-[1px] bg-white opacity-10 my-xs"></div>
   <div className='w-full flex flex-col justify-between  h-[3.925rem]'>
    <div className='w-full flex  text-[#ffffff7f] tracking-[1px] text-[.75rem] justify-between'>
      <p>{year}</p>
      <a href={imdb}>visit on IMDB</a>
    </div>
    <p className='text-white'>
      <span className="text-[2.875rem] lg:text-[clamp(1.75rem,calc(0.464rem+2.009vw),2.875rem)]">#</span>
      <span className='text-[1.875rem] font-[500] tracking-[1px]'>{rating}</span>
    </p>
   </div>
        </div>
      </div>
    </div>
  )
}

export default Currentmovie
