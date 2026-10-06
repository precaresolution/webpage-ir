// 사이트 공통 데이터. 원본 pcsc.co.kr 에서 가져온 공개 정보.
export const site = {
  name: "프리케어 솔루션",
  nameEn: "PreCare Solution",
  nav: [
    { label: "COMPANY", href: "#company" },
    { label: "HISTORY", href: "#history" },
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "GREETINGS", href: "#greeting" },
    { label: "CONTACT", href: "#contact" },
  ],
  contact: {
    phone: "02-780-9310",
    email: "pcs.realred@gmail.com",
    address: "경기도 수원시 팔달구 월드컵로 375, 3층 302호(우만동)",
  },
  copyright: "Copyright (C) 2023 PrecareSolution CO.LTD ALL Rights Reserved.",
} as const;
