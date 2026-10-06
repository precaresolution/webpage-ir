import { site } from "@/content/site";

// TODO: 지도 임베드 등 추가 구현
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold">CONTACT</h2>
      <ul className="mt-4 space-y-1 text-gray-700">
        <li>전화번호 : {site.contact.phone}</li>
        <li>이메일 : {site.contact.email}</li>
        <li>주소 : {site.contact.address}</li>
      </ul>
    </section>
  );
}
