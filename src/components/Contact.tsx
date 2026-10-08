import "aos/dist/aos.css";
import { site } from "@/content/site";
import Image from "next/image";
import NaverMap from "@/components/NaverMap";

// TODO: 지도 임베드 등 추가 구현
export default function Contact() {

  const clientId = process.env.NAVER_MAP_CLIENT_ID;

  return (
    <section id="contact" className="container mx-auto p-4 ">
      <div data-aos="fade-up" className="container mx-auto p-4" >
        <div className="mt-12 w-full px-4 text-center">
          <h2 className="pb-4 text-5xl font-semibold tracking-tight font-gong">
            Contact
          </h2>

          <div className="mt-12 flex flex-col items-center justify-center gap-8 font-gong font-bold opacity-80 lg:flex-row lg:gap-16">
            <div className="text-left text-lg leading-loose sm:text-xl lg:text-2xl">
              <p className="whitespace-nowrap">전화번호 : {site.contact.phone}</p>
              <p className="whitespace-nowrap">이메일 : {site.contact.email}</p>
              <p className="whitespace-pre-line">주소 : {site.contact.address}</p>
            </div>

            <div className="w-1/2">
              <NaverMap clientId={clientId ?? ""}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
