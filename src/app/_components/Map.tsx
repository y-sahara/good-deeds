"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import useLocationStorage from "../_hooks/useLocationStorage"; 
import GeoLocation from "@/types/GeoLocation";
import getCurrentPosition from "../../utils/getCurrentPosition";

declare var google: any; //外部の型宣言を追加

const DEFAULT_POSITION = { lat: 35.6812, lng: 139.7671 }; // 東京

//
declare global {
  interface Window {
    google: typeof google;
  }
}
export default function Map() {
  // Google MapsのMapオブジェクトを参照するためのリファレンス
  const mapRef = useRef<google.maps.Map | null>(null);
  // 位置情報のストレージを使用するためのHook
  const { locations, saveLocation } = useLocationStorage();
  // エラーを管理するためのステート
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<{latitude: number; longitude: number} | null>(null);

  // 地図上にマーカーを配置する関数
  const placeMarker = (location: google.maps.LatLng) => {
    // 現在のマップが存在する場合
    if (mapRef.current) {
      // マーカーをマップ上に配置
      new google.maps.Marker({
        position: location,
        map: mapRef.current,
      });
      // 位置情報を保存
      saveLocation({
        lat: location.lat(),
        lng: location.lng()
      });
    }
  };

  // 地図を初期化する関数
  const initializeMap = (position: GeoLocation) => {
    // 地図を初期化
    mapRef.current = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: position,
        zoom: 14,
      }
    );

    // 地図が初期化された場合
    if (mapRef.current) {
      // 地図をクリックした時のイベントリスナー
      mapRef.current.addListener("click", (e: google.maps.MapMouseEvent) => {
        // クリックされた位置が存在する場合
        if (e.latLng) {
          // その位置にマーカーを配置
          placeMarker(e.latLng);
        }
      });

      // 保存された位置情報をマーカーとして表示
      locations.forEach((location) => {
        // 位置情報をマーカーとして地図上に配置
        new google.maps.Marker({
          position: new google.maps.LatLng(location.lat, location.lng),
          map: mapRef.current,
        });
      });
    }
  };

  // 地図を初期化する関数
  const initMap = () => {
    // 現在のマップが存在しない場合
    if (!mapRef.current) {
      // 現在地を取得する関数を呼び出し
      getCurrentPosition({
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 300000
      })
        .then((position) => {
          setError(null);
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          initializeMap({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        })
        .catch((err: GeolocationPositionError) => {
          // エラー時のメッセージ
          let errorMessage = '位置情報を取得できませんでした。';
          
          // エラーの詳細をコンソールに出力
          console.error('位置情報の取得エラーの詳細:', {
            code: err.code,
            message: err.message,
            name: err.constructor.name,
            // エラーコードの意味を明確に
            codeMessage: err.code === 1 ? 'PERMISSION_DENIED' :
                        err.code === 2 ? 'POSITION_UNAVAILABLE' :
                        err.code === 3 ? 'TIMEOUT' : 'UNKNOWN_ERROR'
          });
          
          // エラーコードに応じたエラー時のメッセージを設定
          switch (err.code) {
            case 1: // PERMISSION_DENIED
              errorMessage = '位置情報の利用が拒否されています。ブラウザの設定で位置情報の利用を許可してください。';
              break;
            case 2: // POSITION_UNAVAILABLE
              errorMessage = '位置情報を取得できません。デバイスのGPS設定を確認してください。';
              break;
            case 3: // TIMEOUT
              errorMessage = '位置情報の取得がタイムアウトしました。再度お試しください。';
              break;
            default:
              errorMessage = '予期せぬエラーが発生しました。';
          }
          
          // エラーをステートに設定
          setError(errorMessage);
          // デフォルトの位置で地図を初期化
          initializeMap(DEFAULT_POSITION);
        });
    }
  };

  // コンポーネントがマウントされた時に地図を初期化
  useEffect(() => {
    // Google Mapsのスクリプトが既に読み込まれているかチェック
    const googleScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
    if (!googleScript) {
      // スクリプトが読み込まれていない場合、動的に追加
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLEMAP_API}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      // スクリプトが既に読み込まれている場合、直接初期化
      initMap();
    }
  }, []);

  return (
    <>
      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}
      <div id="map" style={{ height: "99vh", width: "100%" }} />
      {position && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          <p>位置情報: {position.latitude}, {position.longitude}</p>
        </div>
      )}
    </>
  );
}