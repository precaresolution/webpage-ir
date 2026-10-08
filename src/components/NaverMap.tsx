"use client";

import { useEffect, useRef } from "react";

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.navermap_authFailure = () => {
            console.error("네이버 지도 API 인증 실패");
        };

        const clientId = process.env.NAVER_MAP_CLIENT_ID;

        if (!clientId) {
            console.error("네이버 지도 Client ID가 없습니다.");
            return;
        }

        const script = document.createElement("script");

        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js` + `?ncpKeyId=${clientId}`;

        script.async = true;

        script.onload = () => {
            if (!mapRef.current || !window.naver) return;

            const location = new window.naver.maps.LatLng(
                37.4682800341048,
                126.886196862202
            );

            const map = new window.naver.maps.Map(mapRef.current, {
                center: location,
                zoom: 16,
                
                keyboardShortcuts: false,
            });

            new window.naver.maps.Marker({
                position: location,
                map,
            });

            const infoWindow = new window.naver.maps.InfoWindow({
                content: `
                    <div style="padding: 10px 15px; font-size: 14px; font-weight: 600; white-space: nowrap;">
                        프리케어 솔루션
                    </div>

                    
                `,
            });

            const marker = new window.naver.maps.Marker({
                position: location,
                map,
            });
            
            infoWindow.open(map, marker);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
        <div ref={mapRef} className="h-[400px] w-full rounded-xl"/>
        <a href="https://map.naver.com/p/directions/-/3zdNUw,2AHVw5,대륭테크노17차,37127620,PLACE_POI/-/transit?c=15.00,0,0,0,dh" 
            target="_blank" rel="noopener noreferrer" 
            className="absolute right-4 top-4 z-10 inline-block rounded-md bg-blue-600 px-3 py-1.5 text-xs text-white">
            길찾기
        </a>
    </div>
    

  );
}