import React, { useMemo, useState } from 'react';

const SAMPLE_DIAMONDS = [
  { id:1, shape:'Round', carat:1.2, cut:'Excellent', color:'D', clarity:'VVS1', origin:'Botswana', giaNumber:'1234567890', price:12000, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:2, shape:'Oval', carat:2.1, cut:'Very Good', color:'F', clarity:'VS1', origin:'Canada', giaNumber:'2234567890', price:26500, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:3, shape:'Emerald', carat:3.0, cut:'Excellent', color:'E', clarity:'VVS2', origin:'Russia', giaNumber:'3234567890', price:78000, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:4, shape:'Pear', carat:1.8, cut:'Excellent', color:'G', clarity:'IF', origin:'South Africa', giaNumber:'4234567890', price:34000, image:'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop' },
  { id:5, shape:'Cushion', carat:2.5, cut:'Very Good', color:'H', clarity:'VS2', origin:'Australia', giaNumber:'5234567890', price:41000, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id:6, shape:'Princess', carat:1.5, cut:'Excellent', color:'D', clarity:'VVS1', origin:'Botswana', giaNumber:'6234567890', price:19500, image:'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEzNzQ4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

function FilterBar({ filters, setFilters, onApply }){
  const update=(k,v)=> setFilters(p=>({ ...p, [k]: v }));
  return (
    <div className="grid lg:grid-cols-7 sm:grid-cols-3 grid-cols-2 gap-3">
      {['carat','cut','clarity','color','origin','cert'].map((f)=> (
        <input key={f} className="border border-neutral-300 rounded px-3 py-2 text-sm" placeholder={f==='cert'?'Certification':(f.charAt(0).toUpperCase()+f.slice(1))} value={filters[f]||''} onChange={(e)=>update(f,e.target.value)} />
      ))}
      <input className="border border-neutral-300 rounded px-3 py-2 text-sm" placeholder="Max Price" value={filters.priceMax||''} onChange={(e)=>update('priceMax',e.target.value)} />
      <button onClick={onApply} className="bg-black text-white rounded px-4 text-sm">Apply</button>
    </div>
  );
}

function DiamondCard({ d, onView }){
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow transition-shadow">
      <img src={d.image} alt={d.shape} className="w-full h-48 object-cover"/>
      <div className="p-4 text-sm">
        <div className="font-medium">{d.shape} • {d.carat} ct • {d.cut} • {d.color}/{d.clarity}</div>
        <div className="text-neutral-600">GIA {d.giaNumber}</div>
        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold">${d.price.toLocaleString()}</span>
          <button onClick={()=>onView(d)} className="border px-3 py-1 rounded">View</button>
        </div>
      </div>
    </div>
  );
}

function DiamondModal({ open, onClose, diamond }){
  if(!open || !diamond) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full rounded-lg overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="font-serif text-xl">Diamond Details</div>
          <button onClick={onClose} className="text-neutral-600">Close</button>
        </div>
        <div className="grid md:grid-cols-2">
          <img src={diamond.image} alt="diamond" className="w-full h-80 object-cover"/>
          <div className="p-4 text-sm">
            <ul className="space-y-1">
              <li>Carat: {diamond.carat}</li>
              <li>Cut: {diamond.cut}</li>
              <li>Clarity: {diamond.clarity}</li>
              <li>Color: {diamond.color}</li>
              <li>Shape: {diamond.shape}</li>
              <li>Origin: {diamond.origin}</li>
              <li>Certificate: GIA {diamond.giaNumber}</li>
            </ul>
            <a className="text-blue-600 underline mt-2 inline-block" href={`https://www.gia.edu/report-check?reportno=${diamond.giaNumber}`} target="_blank" rel="noreferrer">Verify on GIA</a>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-2xl font-semibold">${diamond.price.toLocaleString()}</div>
              <button onClick={()=>{ alert('Added to quote. Our team will reach out.'); onClose(); }} className="bg-yellow-500 text-black px-4 py-2 rounded">Add to Quote Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Diamonds(){
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState(null);

  const items = useMemo(()=>{
    return SAMPLE_DIAMONDS.filter(d => (
      (!filters.carat || d.carat >= parseFloat(filters.carat||0)) &&
      (!filters.cut || d.cut.toLowerCase().includes(String(filters.cut).toLowerCase())) &&
      (!filters.clarity || d.clarity.toLowerCase().includes(String(filters.clarity).toLowerCase())) &&
      (!filters.color || d.color.toLowerCase().includes(String(filters.color).toLowerCase())) &&
      (!filters.origin || d.origin.toLowerCase().includes(String(filters.origin).toLowerCase())) &&
      (!filters.cert || String(d.giaNumber).includes(String(filters.cert))) &&
      (!filters.priceMax || d.price <= parseFloat(filters.priceMax||0))
    ));
  }, [filters]);

  return (
    <section id="diamonds" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-serif text-3xl mb-3">Our Diamonds</h2>
          <p className="text-neutral-700 mb-6">100% natural, GIA-certified diamonds. Ethically sourced and available for wholesale or individual purchase.</p>
          <FilterBar filters={filters} setFilters={setFilters} onApply={()=>{}} />
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
            {items.map(d => (<DiamondCard key={d.id} d={d} onView={setSelected} />))}
          </div>
        </div>
        <div id="sourcing" className="border border-neutral-200 rounded-lg p-6 sticky top-28 h-fit">
          <div className="font-serif text-2xl mb-2">Custom Sourcing</div>
          <p className="text-sm text-neutral-700 mb-4">Looking for a specific stone? Share your parameters and our specialists will curate options within your budget.</p>
          <form onSubmit={(e)=>{ e.preventDefault(); alert('Request submitted. You will receive confirmation.'); e.currentTarget.reset(); }} className="grid gap-3 text-sm">
            <input className="border border-neutral-300 rounded px-3 py-2" placeholder="Carat, Cut, Clarity, Color, Shape" />
            <input className="border border-neutral-300 rounded px-3 py-2" placeholder="Budget (USD)" />
            <input className="border border-neutral-300 rounded px-3 py-2" placeholder="Quantity" />
            <textarea className="border border-neutral-300 rounded px-3 py-2" rows={4} placeholder="Additional details" />
            <button className="bg-black text-white rounded px-4 py-2">Submit Request</button>
          </form>
          <div id="gia" className="mt-6 text-sm">
            <div className="font-medium mb-1">GIA Certification</div>
            <p className="text-neutral-700">Every stone is graded by GIA. Verify certificates directly with GIA Report Check.</p>
            <a href="https://www.gia.edu/report-check-landing" target="_blank" rel="noreferrer" className="text-blue-600 underline">Verify a GIA Report</a>
          </div>
        </div>
      </div>
      <DiamondModal open={!!selected} onClose={()=>setSelected(null)} diamond={selected} />
    </section>
  );
}
