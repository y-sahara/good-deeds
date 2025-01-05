import React from 'react';
import { MapPin, Heart, Share2, Award, Users, Sparkles, Brain, Smile, TrendingUp } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "位置情報と連動",
      description: "その場で簡単に記録。あなたの善行の足跡が、地図上に輝きを残します。"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "心の健康をサポート",
      description: "善行は脳内セロトニンを増加させ、幸福感とストレス耐性を高めます。"
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-600" />,
      title: "つながりを創造",
      description: "善行の連鎖を通じて、新しいコミュニティと絆が生まれます。"
    },
    {
      icon: <Smile className="w-8 h-8 text-blue-600" />,
      title: "日々の充実感",
      description: "善行を記録することで、自己肯定感と生きがいが高まります。"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "成長の可視化",
      description: "あなたの善行の履歴やその影響力を、グラフで確認できます。"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "達成の喜び",
      description: "継続的な善行にはバッジや称号が付与され、モチベーションが続きます。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold mb-4">FEATURES</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            善行で広がる、幸せの輪
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            誰かを助けることは、あなた自身の幸せにもつながります。
            善行の記録を通じて、より充実した毎日を過ごしましょう。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};