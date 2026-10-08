// 사이트 공통 데이터. 원본 pcsc.co.kr 에서 가져온 공개 정보.
import ddrmLogo from "@/assets/images/ddcs_logo.png";
import echeonHospitalLogo from "@/assets/images/image.png";
import hospital from "@/assets/images/hospital.jpg";
import kaiiLogo from "@/assets/images/kaii_logo.png";
import nalmcLogo from "@/assets/images/NALMC_logo.svg";
import pcscContact from "@/assets/images/pcsc_contact.png";
import pcscHisNew from "@/assets/images/pcsc_history_new.png";
import pcscHis from "@/assets/images/pcsc_history.png";
import pcscLogo from "@/assets/images/pcsc_logo.svg";
import seosanHospitalLogo from "@/assets/images/Seosan_Hospital_logo.png";
import nchLogo from "@/assets/images/NCH_logo.svg";

export const site = {
  name: "프리케어솔루션",
  nameEn: "PreCare Solution",
  nav: [
    { label: "COMPANY", href: "#company" },
    { label: "HISTORY", href: "#history" },
    // { label: "SOLUTIONS", href: "#solutions" },
    { label: "PARTNERS", href: "#partners" },
    { label: "CONTACT", href: "#contact" },
  ],

  contact: {
    phone: "02-780-9310",
    email: "pcs.realred@gmail.com",
    address: "서울특별시 금천구 가산디지털1로 25,\n대륭테크노타운17차 12층 1211호",
  },
  
  copyright: "Copyright (C) 2023 PrecareSolution CO.LTD ALL Rights Reserved.",

  images: {
    ddrmLogo,
    echeonHospitalLogo,
    hospital,
    kaiiLogo,
    nalmcLogo,
    pcscContact,
    pcscHisNew,
    pcscHis,
    pcscLogo,
    seosanHospitalLogo,
    nchLogo,
  },

} as const;
