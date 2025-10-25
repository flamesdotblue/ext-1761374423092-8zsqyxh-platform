import React from 'react';

export default function Hero(){
  return (
    <section id="home" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline src="https://cdn.coverr.co/videos/coverr-brilliant-diamond-6966/1080p.mp4"></video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-6">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">From the Mine to Your Masterpiece.</h1>
        <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto">100% natural, GIA-certified diamonds — ethically sourced, expertly delivered to professionals worldwide.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#catalog" className="bg-white text-black px-6 py-3 rounded">Explore Diamonds</a>
          <a href="#contact" className="bg-yellow-500 text-black px-6 py-3 rounded">Custom Sourcing Request</a>
        </div>
      </div>
    </section>
  );
}
