import React from 'react';
import { MapPin, Heart, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/happy-diverse-crowd-of-people-background_23-2148848287.jpg?w=2000')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span>幸せの連鎖を、始めよう</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            あなたの<span className="text-blue-600">やさしさ</span>が<br />
            世界を変える
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            善行は、与える人の心も満たします。<br />
            あなたの小さな親切を地図に記録して、幸せの輪を広げましょう。
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
              <MapPin className="w-5 h-5" />
              今すぐ始める
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              詳しく見る
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <div className="font-bold text-3xl text-blue-600 mb-2">93%</div>
              <div className="text-gray-600">善行をした人の幸福度が向上*</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <div className="font-bold text-3xl text-blue-600 mb-2">3倍</div>
              <div className="text-gray-600">周りへの波及効果**</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <div className="font-bold text-3xl text-blue-600 mb-2">∞</div>
              <div className="text-gray-600">広がる笑顔の輪</div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-6">
            * 2023年の幸福度調査による<br />
            ** 善行の連鎖効果に関する研究結果より
          </p>
        </div>
      </div>
    </div>
  );
};