// TODO: 원본 사이트의 메인 배너(배경 이미지 포함) 구현
"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section id="company" className="flex h-dvh w-full items-center bg-cover justify-center px-4 text-center text-white
              bg-center bg-no-repeat" style={{ backgroundImage: `url(${site.images.hospital.src})`,}}>
      <div className="flex w-full flex-col items-center justify-center">
        <Image src={site.images.pcscLogo} alt="PCSC" width={800} height={193} className="w-[800px] max-w-full h-auto" loading="eager"/>
      
        <h3 className="mt-4 text-gray-300 text-3xl leading-snug font-gong">
          진정한 의료 시스템의 구축은 현장에 있고,
          <br />그 답은 프리케어 솔루션의 제품으로 답하겠습니다.
        </h3>
      </div>
    </section>
  );
}
