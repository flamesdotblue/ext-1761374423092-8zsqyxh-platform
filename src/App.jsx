import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Catalog from './components/Catalog';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Catalog />
      </main>
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-serif text-xl mb-2">Pure Origin Diamonds</div>
            <p className="text-slate-600">From the mine to your masterpiece.</p>
          </div>
          <div>
            <div className="font-medium mb-2">Contact</div>
            <p className="text-slate-700">+1 234 567 89<br/>contact@purebrilliance.com</p>
          </div>
          <div>
            <div className="font-medium mb-2">Legal</div>
            <ul className="space-y-1 text-slate-700">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Certifications</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Pure Origin Diamonds. All rights reserved.</div>
      </footer>
    </div>
  );
}
