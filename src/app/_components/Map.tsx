"use client";

/// <reference types="@types/google.maps" />

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// Google Mapsの型定義
declare var google: any;

export default function Map() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [locations, setLocations] = useState<{ lat: number; lng: number }[]>(
    []
  );

  useEffect(() => {
    // ローカルストレージから位置情報を読み込む
    const savedLocations = JSON.parse(
      localStorage.getItem("locations") || "[]"
    );
    setLocations(savedLocations);
  }, []);

  const initMap = () => {
    if (!mapRef.current) {
      mapRef.current = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: 35.6812, lng: 139.7671 },
          zoom: 8,
        }
      );
      if (mapRef.current)
        mapRef.current.addListener("click", (e: google.maps.MapMouseEvent) => {
          if (e.latLng) {
            placeMarker(e.latLng);
          }
        });

      // 保存された位置情報を表示
      locations.forEach((location) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(location.lat, location.lng),
          map: mapRef.current,
        });
      });
    }
  };

  const placeMarker = (location: google.maps.LatLng) => {
    if (mapRef.current) {
      new google.maps.Marker({
        position: location,
        map: mapRef.current,
      });

      const newLocation = { lat: location.lat(), lng: location.lng() };
      const updatedLocations = [...locations, newLocation];
      setLocations(updatedLocations);
      localStorage.setItem("locations", JSON.stringify(updatedLocations));
    }
  };

  return (
    <>
      <Script className="h-screen max-w-10"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLEMAP_API}`}
        onLoad={initMap}
      />
      <div id="map" style={{ height: "600px", width: "100%" }} />
    </>
  );
}
