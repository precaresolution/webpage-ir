// TODO: 대표 인사말 구현
"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { site } from "@/content/site";

export default function Partners() {
  return (
    <section id="partners" className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* HISTORY 제목 */}
        <div data-aos="fade-up" className="pb-24 text-center">
          <h2 className="pb-4 text-5xl font-semibold tracking-tight font-gong">
            Partners
          </h2>

          <p className="text-xl leading-relaxed italic opacity-80 font-['MBC1961GulimM']">
            다양한 분야의 파트너와 함께 새로운 가치를 창출하며<br />
            전문성과 경험을 바탕으로 더 나은 헬스케어의 미래를 만들어갑니다.
          </p>
        </div>

        <div data-aos="fade-up" className="container mx-auto px-4" >
          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 h-60 ">

            <div className="flex justify-center items-center h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl 
                shadow-gray-500/60 " >
              <Image src={site.images.ddrmLogo} alt="pcsc_contact" className="h-20 w-60 translate-y-2"/>
            </div>

            <div className="flex justify-center items-center h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl 
                shadow-gray-500/60" >
              <Image src={site.images.nalmcLogo} alt="pcsc_contact" className="h-20 w-60"/>
            </div>
            
            <div className="flex justify-center items-center h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl 
                shadow-gray-500/60" >
              <Image src={site.images.echeonHospitalLogo} alt="pcsc_contact" className="h-20 w-60"/>
            </div>
            
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 h-60 mt-15">
            <div className="flex justify-center items-center h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl 
                shadow-gray-500/60" >
              <Image src={site.images.seosanHospitalLogo} alt="pcsc_contact" className="h-20 w-105"/>
            </div>

            <div className="flex justify-center items-center h-full flex-col rounded-xl bg-white p-6 text-center shadow-xl 
                shadow-gray-500/60" >
              <Image src={site.images.kaiiLogo} alt="pcsc_contact" className="h-20 w-60"/>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
