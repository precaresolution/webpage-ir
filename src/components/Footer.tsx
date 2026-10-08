import { site } from "@/content/site";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 text-center text-sm text-gray-500">
      <div className="w-full px-4 flex items-center justify-center">
          <Image src={site.images.pcscLogo} alt="pcsc_contact" className="h-20 w-60 pr-4"/>

          <div className="mt-3 flex flex-col gap-y-1 text-left text-xs font-light antialiased opacity-80">
              <p>{site.copyright}</p>
              <p>
                상호명 : {site.name}(주) / 대표전화 : {site.contact.phone} / 이메일 :{" "}
                {site.contact.email}
              </p>
              <p>주소 : {site.contact.address}</p>
          </div>
        </div>
    </footer>
  );
}
