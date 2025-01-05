import React from "react";
import { MapPin } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-100 flex flex-col justify-center  sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md -translate-y-[10%]">
        <div className="flex justify-center">
          <div className="rounded-full bg-indigo-600 p-3">
            <MapPin className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Good Deeds Map
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          あなたの善行を地図に残して、世界をより良い場所に
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
}
