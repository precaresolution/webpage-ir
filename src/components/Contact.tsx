"use client";

import "aos/dist/aos.css";
import { site } from "@/content/site";
import Image from "next/image";
import NaverMap from "@/components/NaverMap";

// TODO: 지도 임베드 등 추가 구현
export default function Contact() {
  return (
    <section id="contact" className="container mx-auto p-4 ">
      <div className="container mx-auto p-4" data-aos="fade-up">
        <div className="mt-12 w-full px-4 text-center">
          <h2 className="pb-4 text-5xl font-semibold tracking-tight font-gong">
            Contact
          </h2>

          <div className="mt-12 flex items-center justify-center gap-16 font-gong font-bold opacity-80">
            <div className="text-left text-2xl leading-loose text-right">
              <p>전화번호 : {site.contact.phone}</p>
              <p>이메일 : {site.contact.email}</p>
              <p className="whitespace-pre-line">주소 : {site.contact.address}</p>
            </div>

            <div className="w-1/2">
              <NaverMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
