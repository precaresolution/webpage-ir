// TODO: 회사 소개 카드 4개 구현 (융합 솔루션 / 경영 효율화 / 예방관리 / MSO)
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Company() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 140,
    });

    AOS.refresh();
  }, []);
  return (
      <section className="relative bg-white py-5 pb-20">
        <div data-aos="fade-down" className="container mx-auto px-4" >
          <div className="relative z-10 -mt-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">

            <div className="h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl shadow-gray-500/60" >
              <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] pointer-events-none mb-6 rounded-full">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-5 h-5 text-white"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z"/>
                  </svg>
                </span>
              </button>
              <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900 mb-2 font-gong">
                융합 솔루션
              </h4>
              <hr className="mb-2 w-full shrink-0" ></hr>
              <p className="block antialiased text-base font-light leading-relaxed text-inherit font-mbc opacity-80 ">
                의료현장에서 필요한<br/> 
                SW, ICT, AI 융합을 통한<br/> 
                디지털 헬스케어 개발에 임상과<br/> 
                IT접목한 솔루션 개발<br/>
              </p>
            </div>

            <div className="h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl shadow-gray-500/60" >
              <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] pointer-events-none mb-6 rounded-full">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 024 024" className="w-5 h-5 text-white"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z"/>
                  </svg>
                </span>
              </button>
              <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900 mb-2 font-gong">
                경영 효율화
              </h4>
              <hr className="mb-2 w-full shrink-0"></hr>
              <p className="block antialiased text-base font-light leading-relaxed text-inherit font-['MBC1961GulimM'] opacity-80 ">
                의료데이터를 활용한<br/> 
                선도적 경영효율화 추진
              </p>
            </div>

            <div className="h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl shadow-gray-500/60" >
              <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-teal-600 to-teal-400 text-white shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/40 active:opacity-[0.85] pointer-events-none mb-6 rounded-full">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-5 h-5 text-white"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475Z"/>
                    <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z"/>
                  </svg>
                </span>
              </button>
              <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900 mb-2 font-gong">
                예방관리
              </h4>
              <hr className="mb-2 w-full shrink-0"></hr>
              <p className="block antialiased text-base font-light leading-relaxed text-inherit font-['MBC1961GulimM'] opacity-80 ">
                헬스케어 기술개발과<br/>
                사업화 추진을 통한<br/>
                예방관리 솔루션 개발
              </p>
            </div>

            <div className="flex justify-center items-center h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl shadow-gray-500/60" >
              <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] pointer-events-none mb-6 rounded-full">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="w-5 h-5 text-white"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"/>
                  </svg>
                </span>
              </button>
              <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900 mb-2 font-gong">
                융합 솔루션
              </h4>
              <hr className="mb-2 w-full shrink-0"></hr>
              <p className="block antialiased text-base font-light leading-relaxed text-inherit font-['MBC1961GulimM'] opacity-80 ">
                마케팅, 경영지원서비스로서<br/> 
                의료행위와 관계 없는<br/> 
                병원 전반의<br/> 
                경영 서비스 제공<br/>
              </p>
            </div>

          </div>
        </div>
      </section>

      // <section id="company" className="mx-auto max-w-6xl px-4 py-20">
      //   <h2 className="text-3xl font-bold">COMPANY</h2>
      //   <p className="mt-4 text-gray-500">TODO: 회사 소개 섹션</p>
      // </section>
    
  );
}
