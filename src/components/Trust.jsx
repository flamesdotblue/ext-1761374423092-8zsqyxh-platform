import React from 'react';

export default function Trust(){
  const items = [
    { title: 'Authenticity', desc: 'GIA-certified natural diamonds only.' },
    { title: 'Transparency', desc: 'Direct mine-to-market supply chain.' },
    { title: 'Certification', desc: 'Downloadable GIA certificates & verification.' },
    { title: 'Global Reach', desc: 'Insured worldwide delivery and support.' },
  ];

  return (
    <section id="trust" className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <img className="rounded-lg shadow" src="https://images.unsplash.com/photo-1556228453-efd1c8c8fcd3?q=80&w=1400&auto=format&fit=crop" alt="Ethical mine"/>
      <div>
        <h2 className="font-serif text-3xl mb-4">Sourced from the Earth. Certified by the World.</h2>
        <p className="text-slate-700 mb-6">We work exclusively with ethical mines and certify every stone through the Gemological Institute of America (GIA). Trust, purity, and provenance are embedded in every transaction.</p>
        <div className="grid grid-cols-2 gap-4">
          {items.map((i) => (
            <div key={i.title} className="border border-slate-200 rounded p-4">
              <div className="font-medium">{i.title}</div>
              <div className="text-slate-600 text-sm">{i.desc}</div>
            </div>
          ))}
        </div>
        <a className="text-blue-600 underline mt-4 inline-block" href="https://www.gia.edu/report-check-landing" target="_blank" rel="noreferrer">Verify GIA certification</a>
      </div>
    </section>
  );
}
