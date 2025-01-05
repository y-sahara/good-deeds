import React from 'react';
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Features } from './_components/Features';
import MapPreview from './_components/MapPreview';
import { CallToAction } from './_components/CallToAction';
// }


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <MapPreview />
      <CallToAction />
    </div>
  );
}
