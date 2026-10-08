// TODO: 연혁 타임라인 구현 (2023 ~ 현재)
"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import { site } from "@/content/site";

export default function History() {
  return (
    <section id="history" className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* HISTORY 제목 */}
        <div data-aos="fade-up" className="pb-24 text-center">
          <h2 className="pb-4 text-5xl font-semibold tracking-tight font-gong">
            History
          </h2>

          <p className="text-xl leading-relaxed italic opacity-80">
            의료 현장의 고객이 겪는 고충을 공유하며<br />
            퍼블릭 헬스케어 패러다임을 선도하고 있습니다.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gray-300"/>

          {/* 2023 - 현재*/}
          <div data-aos="fade-up" className="relative min-h-[360px]">
            {/* 텍스트 */}
            <div className="grid min-h-[360px] grid-cols-2 items-center">
              <div className="pr-42 text-right">
                <h3 className="pb-3 text-3xl font-semibold font-gong">
                  2023 ~ 현재
                </h3>

                <div className="space-y-2 mt-4">
                  <p className="text-lg opacity-50">
                    공공 의료 기관 AI-CP 연구 개발
                  </p>

                  <p className="text-lg opacity-50">
                    의료 돌봄 구축 사업
                  </p>

                  <p className="text-lg opacity-50">
                    의료체계 디지털 전환 사업 추진
                  </p>

                  <p className="text-lg opacity-50">
                    사내벤처 창업 지원 사업 선정
                  </p>

                  <p className="text-lg opacity-50">
                    프리케어솔루션 설립
                  </p>
                </div>
              </div>

              <div />
            </div>

            {/* 이미지 */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full bg-white shadow-lg">
                <Image src={site.images.pcscHisNew} alt="2023 - 현재" fill className="object-cover" sizes="(max-width:768px) 100vw 50vw"/>
              </div>
            </div>
          </div>

          {/* 2023 */}
          <div data-aos="fade-up" className="relative min-h-[360px]">
            {/* 텍스트 */}
            <div className="grid min-h-[360px] grid-cols-2 items-center">
              <div />

              <div className="pl-42 text-left">
                <h3 className="pb-3 text-3xl font-semibold font-gong">
                  2023
                </h3>

                <div className="space-y-2 mt-4">
                  <p className="text-lg opacity-50 font-['MBC1961GulimM']">
                    공공의료기관 운영본부장 역임
                  </p>

                  <p className="text-lg opacity-50 font-['MBC1961GulimM']">
                    퍼블릭 헬스케어 패러다임 구축 선도
                  </p>

                  <p className="text-lg opacity-50 font-['MBC1961GulimM']">
                    치매조기 검진 시스템 (KDSQ) 개발 참여
                  </p>

                  <p className="text-lg opacity-50 font-['MBC1961GulimM']">
                    덴티아이 납품을 통해 퍼블릭 헬스케어 시장 확대
                  </p>

                  <p className="text-lg opacity-50 font-['MBC1961GulimM']">
                    2022년도 공공의료정보망 통합 운영 유지관리
                  </p>

                  <p className="text-lg opacity-50 font-['MBC1961GulimM']">
                    KAI-I 이사로 역임하며 의료 현장 전문가로서 개발 참여
                  </p>
                </div>
              </div>
            </div>

            {/* 이미지 */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full bg-white shadow-lg">
                <Image src={site.images.pcscHis} alt="2023" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
