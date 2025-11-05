import { Calendar, Filter, MapPin, Star, MessageSquare, Wallet, CheckCircle2 } from 'lucide-react';

const experts = [
  { id: 1, name: 'Ravi Kumar', city: 'Bengaluru', skill: 'Product Strategy', rating: 4.9, reviews: 112 },
  { id: 2, name: 'Anita Sharma', city: 'Mumbai', skill: 'Marketing', rating: 4.8, reviews: 89 },
  { id: 3, name: 'Suresh Iyer', city: 'Chennai', skill: 'Operations', rating: 4.7, reviews: 64 },
  { id: 4, name: 'Priya Gupta', city: 'Delhi', skill: 'Finance', rating: 5.0, reviews: 143 },
  { id: 5, name: 'Manoj Verma', city: 'Pune', skill: 'Manufacturing', rating: 4.6, reviews: 52 },
  { id: 6, name: 'Lakshmi Rao', city: 'Hyderabad', skill: 'Data Science', rating: 4.9, reviews: 97 },
];

function SectionHeading({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="mx-auto max-w-7xl px-6">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{eyebrow}</span>
        <h2 className="mt-3 font-inter text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function CoreSections() {
  return (
    <main className="space-y-20 py-16">
      {/* How It Works */}
      <section>
        <SectionHeading
          id="how"
          eyebrow="How it works"
          title="Create Profile → Get Matched by AI → Start Earning"
          subtitle="A simple, guided flow that respects your time and showcases your strengths."
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {[
            { title: 'Create Profile', desc: 'Tell us your skills, city, languages and availability. We verify every profile.', color: 'from-teal-600 to-teal-500', icon: <CheckCircle2 className="h-6 w-6" /> },
            { title: 'AI Matching', desc: 'Our engine pairs you with relevant opportunities from people and companies.', color: 'from-amber-500 to-amber-400', icon: <Filter className="h-6 w-6" /> },
            { title: 'Start Earning', desc: 'Accept bookings, meet over video or in-person, and get paid securely.', color: 'from-slate-800 to-slate-700', icon: <Wallet className="h-6 w-6" /> },
          ].map((step, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-tr ${step.color} p-3 text-white`}>
                {step.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Experts + Filters */}
      <section id="explore">
        <SectionHeading
          eyebrow="Explore Experts"
          title="Verified professionals across India"
          subtitle="Use filters to find the right mentor or consultant for your needs."
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
              <MapPin className="h-4 w-4 text-slate-500" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="City (e.g., Mumbai)" />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Skill (e.g., Finance)" />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
              <Star className="h-4 w-4 text-slate-500" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Min Rating (e.g., 4.5)" />
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">
              <Filter className="h-4 w-4" /> Apply Filters
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((ex) => (
              <div key={ex.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{ex.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">{ex.skill}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700">
                    <Star className="h-3.5 w-3.5 fill-teal-600 text-teal-600" /> {ex.rating}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {ex.city}</span>
                  <span>•</span>
                  <span>{ex.reviews} reviews</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-teal-200 hover:text-teal-800">View Profile</button>
                  <a href="#book" className="flex-1 rounded-xl bg-amber-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-amber-600">Book</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book">
        <SectionHeading
          eyebrow="Booking"
          title="Pick a date, choose a slot, pay securely"
          subtitle="Flexible scheduling for virtual or in‑person sessions."
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Calendar mock */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">April 2025</h4>
                  <p className="text-sm text-slate-500">Select a date</p>
                </div>
                <Calendar className="h-5 w-5 text-teal-700" />
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {Array.from({ length: 35 }, (_, i) => (
                  <button key={i} className="aspect-square rounded-lg border border-slate-200 hover:border-teal-300 hover:text-teal-800">{(i % 30) + 1}</button>
                ))}
              </div>
            </div>

            {/* Slots + payment */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">Available Slots</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['10:00', '11:30', '14:00', '16:30', '18:00'].map((t) => (
                    <button key={t} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm hover:border-teal-300 hover:text-teal-800">{t}</button>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">Secure Payment</h4>
                <p className="mt-1 text-sm text-slate-600">Pay with UPI, cards, or net banking. Protected with industry‑standard encryption.</p>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm text-slate-600">Consultation Fee</p>
                    <p className="text-xl font-semibold text-slate-900">₹1,500</p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600">
                    <Wallet className="h-4 w-4" /> Pay & Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard + Messages */}
      <section id="dashboard">
        <SectionHeading
          eyebrow="Dashboard"
          title="Your bookings, messages, and earnings at a glance"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Bookings</h4>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="flex items-center justify-between"><span>Apr 12, 11:30 • Strategy</span><span className="rounded-full bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700">Confirmed</span></li>
              <li className="flex items-center justify-between"><span>Apr 15, 14:00 • Finance</span><span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">Pending</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Messages</h4>
            <div className="mt-3 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-teal-50 p-2 text-teal-800"><MessageSquare className="h-4 w-4" /></div>
                <p className="text-slate-600">StartupX: Can we discuss go-to-market for Tier 2 cities?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-amber-50 p-2 text-amber-800"><MessageSquare className="h-4 w-4" /></div>
                <p className="text-slate-600">EduTech: Looking for a mentor for our student cohort.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Earnings</h4>
            <div className="mt-3 rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-600">This month</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">₹24,800</p>
              <p className="mt-1 text-xs text-teal-700">+12% vs last month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Hub */}
      <section id="stories">
        <SectionHeading
          eyebrow="Story Hub"
          title="Inspiring journeys from the WisdomWorks community"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <article key={n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">From Retirement to Renaissance</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                After 32 years in banking, Meera found a new purpose mentoring fintech founders. Her insights helped 3 startups raise seed rounds.
              </p>
              <button className="mt-4 text-sm font-semibold text-teal-700 hover:text-teal-800">Read story →</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
