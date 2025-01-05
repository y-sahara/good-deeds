import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Heart className="w-12 h-12 mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl font-bold mb-6">
            今日から始める、幸せの連鎖
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            善行は、与える人の心も満たします。<br />
            あなたの「やさしさ」が、誰かの人生を変えるかもしれません。<br />
            その小さな一歩を、今日から始めてみませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              無料で始める
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              デモを見る
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};