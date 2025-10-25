import React, { useMemo } from 'react';

const DATA = [
  { id:1, shape:'Round', carat:1.2, cut:'Excellent', color:'D', clarity:'VVS1', origin:'Botswana', giaNumber:'1234567890', price:12000, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:2, shape:'Oval', carat:2.1, cut:'Very Good', color:'F', clarity:'VS1', origin:'Canada', giaNumber:'2234567890', price:26500, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:3, shape:'Emerald', carat:3.0, cut:'Excellent', color:'E', clarity:'VVS2', origin:'Russia', giaNumber:'3234567890', price:78000, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:4, shape:'Pear', carat:1.8, cut:'Excellent', color:'G', clarity:'IF', origin:'South Africa', giaNumber:'4234567890', price:34000, image:'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop' },
  { id:5, shape:'Cushion', carat:2.5, cut:'Very Good', color:'H', clarity:'VS2', origin:'Australia', giaNumber:'5234567890', price:41000, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:6, shape:'Princess', carat:1.5, cut:'Excellent', color:'D', clarity:'VVS1', origin:'Botswana', giaNumber:'6234567890', price:19500, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }
];

function Card({ d }){
  const giaLink = useMemo(() => `https://www.gia.edu/report-check?reportno=${d.giaNumber}`, [d.giaNumber]);
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow transition-shadow">
      <img src={d.image} alt={`${d.shape} diamond`} className="w-full h-48 object-cover"/>
      <div className="p-4 text-sm">
        <div className="font-medium">{d.shape} • {d.carat} ct • {d.cut} • {d.color}/{d.clarity}</div>
        <div className="text-slate-600">Origin: {d.origin}</div>
        <div className="flex items-center justify-between mt-3">
          <a className="text-blue-600 underline" href={giaLink} target="_blank" rel="noreferrer">GIA {d.giaNumber}</a>
          <span className="font-semibold">${d.price.toLocaleString()}</span>
        </div>
        <button onClick={() => alert('Quote request submitted. Our team will contact you shortly.')} className="mt-3 w-full bg-yellow-500 text-black px-3 py-2 rounded font-medium">Add to Quote</button>
      </div>
    </div>
  );
}

export default function Catalog({ title = 'Our Diamonds' }){
  return (
    <section id="catalog" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-serif text-3xl">{title}</h2>
        <div className="text-sm text-slate-600">Natural, GIA-certified • Conflict-free • Global delivery</div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {DATA.map(d => (<Card key={d.id} d={d} />))}
      </div>
    </section>
  );
}
