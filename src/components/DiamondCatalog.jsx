import { useMemo, useState } from 'react'
import { Search, Filter, X, Shield, Star } from 'lucide-react'

const DIAMONDS = [
  {
    id: 'PO-1001',
    carat: 1.2,
    cut: 'Excellent',
    color: 'D',
    clarity: 'VVS1',
    price: 18500,
    shape: 'Round',
    origin: 'Botswana',
    cert: 'GIA 1234567890',
    img: 'https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'PO-1002',
    carat: 2.05,
    cut: 'Very Good',
    color: 'F',
    clarity: 'VS1',
    price: 39200,
    shape: 'Oval',
    origin: 'Canada',
    cert: 'GIA 2345678901',
    img: 'https://images.unsplash.com/photo-1603561592358-1e6a50d3a5bd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'PO-1003',
    carat: 1.52,
    cut: 'Excellent',
    color: 'E',
    clarity: 'IF',
    price: 52500,
    shape: 'Emerald',
    origin: 'South Africa',
    cert: 'GIA 3456789012',
    img: 'https://images.unsplash.com/photo-1563823261323-4f93a69c6a1a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'PO-1004',
    carat: 0.9,
    cut: 'Excellent',
    color: 'G',
    clarity: 'VVS2',
    price: 9800,
    shape: 'Princess',
    origin: 'Russia',
    cert: 'GIA 4567890123',
    img: 'https://images.unsplash.com/photo-1609951651556-533fefba2a41?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function DiamondCatalog() {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ cut: 'All', color: 'All', clarity: 'All', shape: 'All', minPrice: '', maxPrice: '' })
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    return DIAMONDS.filter((d) => {
      const matchesText = [d.id, d.shape, d.origin, d.cert].join(' ').toLowerCase().includes(search.toLowerCase())
      const matchesCut = filters.cut === 'All' || d.cut === filters.cut
      const matchesColor = filters.color === 'All' || d.color === filters.color
      const matchesClarity = filters.clarity === 'All' || d.clarity === filters.clarity
      const matchesShape = filters.shape === 'All' || d.shape === filters.shape
      const minOk = filters.minPrice === '' || d.price >= Number(filters.minPrice)
      const maxOk = filters.maxPrice === '' || d.price <= Number(filters.maxPrice)
      return matchesText && matchesCut && matchesColor && matchesClarity && matchesShape && minOk && maxOk
    })
  }, [search, filters])

  return (
    <section id="catalog" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold">Our Diamonds</h3>
            <p className="mt-2 text-slate-300">Curated selection of natural, GIA-certified stones. Request additional inventory on demand.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ID, shape, origin, cert..."
                className="w-full rounded-md bg-black/40 border border-white/10 pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <details className="group relative">
              <summary className="list-none inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm cursor-pointer select-none">
                <Filter className="h-4 w-4" /> Filters
              </summary>
              <div className="absolute right-0 mt-2 w-[min(92vw,680px)] rounded-xl border border-white/10 bg-[#0c0c0d] p-4 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  <Select label="Cut" value={filters.cut} onChange={(v) => setFilters((f) => ({ ...f, cut: v }))} options={["All","Excellent","Very Good","Good"]} />
                  <Select label="Color" value={filters.color} onChange={(v) => setFilters((f) => ({ ...f, color: v }))} options={["All","D","E","F","G","H","I"]} />
                  <Select label="Clarity" value={filters.clarity} onChange={(v) => setFilters((f) => ({ ...f, clarity: v }))} options={["All","FL","IF","VVS1","VVS2","VS1","VS2","SI1","SI2"]} />
                  <Select label="Shape" value={filters.shape} onChange={(v) => setFilters((f) => ({ ...f, shape: v }))} options={["All","Round","Oval","Princess","Emerald","Cushion"]} />
                  <Number label="Min Price" value={filters.minPrice} onChange={(v) => setFilters((f) => ({ ...f, minPrice: v }))} />
                  <Number label="Max Price" value={filters.maxPrice} onChange={(v) => setFilters((f) => ({ ...f, maxPrice: v }))} />
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <article key={d.id} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={`${d.shape} diamond`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs">
                  <Shield className="h-3.5 w-3.5 text-emerald-300" /> GIA Certified
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{d.id}</h4>
                  <span className="text-amber-300 font-semibold">${d.price.toLocaleString()}</span>
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-300">
                  <div><dt className="text-slate-400">Carat</dt><dd>{d.carat}</dd></div>
                  <div><dt className="text-slate-400">Cut</dt><dd>{d.cut}</dd></div>
                  <div><dt className="text-slate-400">Color</dt><dd>{d.color}</dd></div>
                  <div><dt className="text-slate-400">Clarity</dt><dd>{d.clarity}</dd></div>
                  <div><dt className="text-slate-400">Shape</dt><dd>{d.shape}</dd></div>
                  <div><dt className="text-slate-400">Origin</dt><dd>{d.origin}</dd></div>
                </dl>
                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => setSelected(d)} className="flex-1 rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2 text-black font-semibold hover:from-amber-300 hover:to-yellow-400">View Details</button>
                  <a href="https://www.gia.edu/report-check-landing" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 px-3 py-2 text-sm">GIA Report</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">No diamonds match your criteria. Adjust filters or submit a custom sourcing request.</div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0c]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h4 className="text-lg font-semibold">{selected.id} • {selected.shape} • {selected.carat} ct</h4>
              <button onClick={() => setSelected(null)} className="rounded-md p-2 hover:bg-white/10"><X className="h-5 w-5" /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative">
                <img src={selected.img} alt="Diamond view" className="h-full w-full object-cover" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-md bg-black/50 px-3 py-2 text-xs">
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-300" /> 360° Viewer (demo)</span>
                  <span className="opacity-80">Zoom & rotate</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-amber-300 font-semibold text-xl">${selected.price.toLocaleString()}</p>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div><dt className="text-slate-400">Cut</dt><dd>{selected.cut}</dd></div>
                  <div><dt className="text-slate-400">Color</dt><dd>{selected.color}</dd></div>
                  <div><dt className="text-slate-400">Clarity</dt><dd>{selected.clarity}</dd></div>
                  <div><dt className="text-slate-400">Origin</dt><dd>{selected.origin}</dd></div>
                  <div className="col-span-2"><dt className="text-slate-400">Certification</dt><dd className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-300" /> {selected.cert}</dd></div>
                </dl>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const f = new FormData(e.currentTarget)
                    const payload = Object.fromEntries(f.entries())
                    console.log('Quote for', selected.id, payload)
                    alert('Quote request submitted. Our team will send an instant estimate and follow up.')
                    setSelected(null)
                  }}
                  className="mt-6 space-y-3"
                >
                  <div>
                    <label className="text-xs text-slate-400">Quantity</label>
                    <input name="qty" type="number" min="1" defaultValue={1} className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">Notes</label>
                    <textarea name="notes" rows={3} className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" placeholder="Delivery timeline, special requests" />
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="submit" className="flex-1 rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2 text-black font-semibold hover:from-amber-300 hover:to-yellow-400">Add to Quote Request</button>
                    <a className="rounded-md border border-white/10 px-4 py-2" href="https://www.gia.edu/report-check-landing" target="_blank" rel="noreferrer">Verify GIA</a>
                  </div>
                  <p className="text-[11px] text-slate-400">All communications are protected with HTTPS and HSTS. We do not sell or share your data.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="text-xs">
      <span className="block text-slate-400 mb-1">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300 text-sm">
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}

function Number({ label, value, onChange }) {
  return (
    <label className="text-xs">
      <span className="block text-slate-400 mb-1">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} type="number" min="0" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300 text-sm" />
    </label>
  )
}
