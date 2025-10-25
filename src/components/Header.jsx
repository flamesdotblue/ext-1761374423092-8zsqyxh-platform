import React from 'react';

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="text-xs bg-black text-white px-4 py-2 flex items-center justify-between">
        <div className="space-x-4">
          <a href="tel:+123456789" className="hover:underline">+1 234 567 89</a>
          <a href="mailto:contact@purebrilliance.com" className="hover:underline">contact@purebrilliance.com</a>
        </div>
        <div className="hidden sm:block text-slate-300">GIA-certified natural diamonds • Ethical sourcing • Global delivery</div>
      </div>
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl tracking-wide font-serif">Pure Origin Diamonds</div>
        <ul className="hidden md:flex items-center space-x-6 text-sm">
          <li><a className="hover:text-black/70" href="#home">Home</a></li>
          <li><a className="hover:text-black/70" href="#catalog">Our Diamonds</a></li>
          <li><a className="hover:text-black/70" href="#trust">Ethics & GIA</a></li>
          <li><a className="hover:text-black/70" href="#contact">Contact</a></li>
        </ul>
        <div className="space-x-3 text-sm">
          <button className="border border-slate-900 px-4 py-2 rounded hover:bg-black hover:text-white">Client Login</button>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded font-medium">Request a Quote</button>
        </div>
      </nav>
    </header>
  );
}
