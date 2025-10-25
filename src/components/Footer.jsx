import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-serif text-xl mb-3">Pure Origin Diamonds</div>
          <p className="text-neutral-600">Pure Origin. Perfect Brilliance.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Company</div>
          <ul className="space-y-1 text-neutral-700">
            <li><a href="#catalog" className="hover:underline">Our Diamonds</a></li>
            <li><a href="#about" className="hover:underline">GIA Certification</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Connect</div>
          <ul className="space-y-1 text-neutral-700">
            <li><a className="hover:underline" href="#">LinkedIn</a></li>
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">WeChat</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Contact</div>
          <p className="text-neutral-700">+1 234 567 89<br/>contact@pureorigin.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} Pure Origin Diamonds. All rights reserved.</div>
    </footer>
  );
}
