'use client'
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function MapPreview() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_API || "",
      version: "weekly",
      libraries: []
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 35.6762, lng: 139.6503 },
          zoom: 13,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }]
            }
          ]
        });

        // サンプルのマーカーを追加
        const markers = [
          { lat: 35.6762, lng: 139.6503 },
          { lat: 35.6804, lng: 139.6594 },
          { lat: 35.6722, lng: 139.6454 }
        ];

        markers.forEach(position => {
          new google.maps.Marker({
            position,
            map,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#3B82F6",
              fillOpacity: 0.8,
              strokeWeight: 0
            }
          });
        });
      }
    });
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            善行の記録を地図で見る
          </h2>
          <p className="text-xl text-gray-600">
            あなたの周りで起きている素敵な出来事をチェック
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            ref={mapRef} 
            className="w-full h-[600px] rounded-xl shadow-lg"
          ></div>
        </div>
      </div>
    </section>
  );
}