import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 text-center text-sm text-gray-500">
      <p>{site.copyright}</p>
      <p className="mt-2">
        상호명 : {site.name}(주) / 대표전화 : {site.contact.phone} / 이메일 :{" "}
        {site.contact.email}
      </p>
      <p>주소 : {site.contact.address}</p>
    </footer>
  );
}
