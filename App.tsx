import React, { useMemo, useState, useEffect } from 'react';
import AboutSection from './components/AboutSection';
import RestaurantCard from './components/RestaurantCard';
import { restaurantData } from './data';
import { Restaurant } from './types';

// Easing function to match the dynamic count-up animation from the video
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; active: boolean }> = ({ end, duration = 2000, suffix = "", active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, active]);

  return <>{count}{suffix}</>;
};

const App: React.FC = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<'All' | 'Budget' | 'Mid-range' | 'Premium'>('All');
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleAreaSelect = (area: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSelectedArea(area);
    setPriceFilter('All');
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSelectedArea(null);
    setSearchTerm('');
    setPriceFilter('All');
  };

  const handleComingSoon = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const getAreaLandmark = (area: string) => {
    switch (area) {
      case 'Tatabad': return 'Tatabad Main Road';
      case 'Peelamedu': return 'Avinashi Road';
      case 'Singanallur': return 'Trichy Road';
      case 'Kovaipudur': return 'V-Block Main Road';
      case 'Race Course': return 'Thomas Park / DB Road';
      case 'Gandhipuram': return 'Crosscut Road';
      case 'Saibaba Colony': return 'NSR Road';
      case 'R.S. Puram': return 'Diwan Bahadur Road';
      case 'Neelambur': return 'Avinashi Main Road';
      default: return 'Main Junction';
    }
  };

  const getAreaDescription = (area: string) => {
    switch (area) {
      case 'Tatabad': return 'A lively hub with diverse local experiences';
      case 'Peelamedu': return 'A busy area known for connectivity and activity';
      case 'Singanallur': return 'A well-connected zone near key city routes';
      case 'Kovaipudur': return 'A calm residential area close to nature';
      case 'Race Course': return 'A central location with vibrant city life';
      case 'Gandhipuram': return 'The heart of transport and urban movement';
      case 'Saibaba Colony': return 'A popular area with a balanced lifestyle';
      case 'R.S. Puram': return 'A prime locality with classic city charm';
      case 'Neelambur': return 'A fast-growing area near major highways';
      default: return 'Explore verified local spots and restaurants';
    }
  };

  const getPriceCategory = (restaurant: Restaurant) => {
    const prices: number[] = [];
    Object.values(restaurant.menu).forEach(items => {
      items?.forEach(item => {
        if (typeof item[1] === 'number') prices.push(item[1]);
        else {
          const range = (item[1] as string).split(' – ').map(p => parseInt(p));
          if (!isNaN(range[0])) prices.push(range[0]);
        }
      });
    });
    const avg = prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : 0;
    if (avg < 100) return 'Budget';
    if (avg < 300) return 'Mid-range';
    return 'Premium';
  };

  const areas = useMemo(() => Object.keys(restaurantData), []);

  const filteredResults = useMemo(() => {
    const results: Record<string, Restaurant[]> = {};
    const normalizedSearch = searchTerm.toLowerCase();

    Object.entries(restaurantData).forEach(([area, hotels]) => {
      if (selectedArea && area !== selectedArea) return;

      const matchedHotels = hotels.filter(hotel => {
        const searchContent = `${hotel.name} ${area} ${hotel.address} ${hotel.special}`.toLowerCase();
        const matchesSearch = !searchTerm || searchContent.includes(normalizedSearch);
        const matchesPrice = priceFilter === 'All' || getPriceCategory(hotel) === priceFilter;
        return matchesSearch && matchesPrice;
      });
      if (matchedHotels.length > 0) results[area] = matchedHotels;
    });
    return results;
  }, [searchTerm, selectedArea, priceFilter]);

  const totalFilteredCount = useMemo(() => 
    Object.values(filteredResults).reduce((acc, curr) => acc + curr.length, 0),
  [filteredResults]);

  const isBrowsingAreas = !selectedArea && !searchTerm;

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#fcfaf7]">
      {/* Splash Screen */}
      {isInitialLoading && (
        <div className="fixed inset-0 z-[200] bg-[#0a0a0c] flex flex-col items-center justify-center transition-all duration-1000">
          <div className="relative mb-8 animate-splash-pin">
            <div className="absolute -inset-4 bg-[#f26522] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="w-20 h-20 bg-[#f26522] rounded-[2rem] flex items-center justify-center relative z-10 shadow-2xl shadow-orange-900/50">
              <i className="fas fa-location-dot text-white text-3xl"></i>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-[0.2em] text-white mb-2 uppercase">SPOT FINDER</h1>
            <p className="shimmer-text text-sm font-bold uppercase tracking-[0.4em]">City Guide</p>
          </div>
        </div>
      )}

      {/* Global Background Decorations */}
      <div className="fixed top-0 -left-64 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] pointer-events-none z-0 hidden 2xl:block animate-pulse"></div>
      <div className="fixed bottom-0 -right-64 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none z-0 hidden 2xl:block"></div>

      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-[#f26522] text-white px-6 py-3 rounded-2xl shadow-2xl font-bold flex items-center gap-3">
            <i className="fas fa-info-circle"></i>
            Coming soon...
          </div>
        </div>
      )}

      <AboutSection isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* VIEW 1: HOME PORTION */}
      <div 
        className={`transition-all duration-700 ease-in-out transform origin-center ${
          isBrowsingAreas 
            ? `scale-100 opacity-100 blur-0 ${isInitialLoading ? 'pointer-events-none' : ''}` 
            : 'scale-[1.8] opacity-0 blur-2xl pointer-events-none fixed top-0 left-0 w-full h-screen overflow-hidden'
        }`}
      >
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent text-white'}`}>
          <div className="max-w-[1600px] mx-auto flex items-center justify-between">
            <div className={`flex items-center gap-2 cursor-pointer ${!isInitialLoading ? 'animate-in slide-in-from-left-4 duration-700' : 'opacity-0'}`} onClick={handleBack}>
              <div className="w-8 h-8 bg-[#f26522] rounded-lg flex items-center justify-center">
                <i className="fas fa-location-dot text-white text-sm"></i>
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-black text-lg tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>SPOT FINDER</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${scrolled ? 'text-slate-400' : 'text-white/60'}`}>City Guide</span>
              </div>
            </div>

            <div className={`hidden md:flex items-center gap-8 ${!isInitialLoading ? 'animate-in slide-in-from-right-4 duration-700' : 'opacity-0'}`}>
              <div className="flex items-center gap-6 text-sm font-semibold">
                <button onClick={handleBack} className="text-[#f26522] hover:opacity-80 transition-all">Home</button>
                <button onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#f26522] hover:opacity-80 transition-all">Explore Places</button>
                <button onClick={handleComingSoon} className="text-[#f26522] hover:opacity-80 transition-all">Tourist Spots</button>
                <button onClick={() => setIsAboutOpen(true)} className="text-[#f26522] hover:opacity-80 transition-all">About Us</button>
              </div>
            </div>
          </div>
        </nav>

        <header className="relative bg-[#0a0a0c] pt-48 pb-64 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(242,101,34,0.08)_0%,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className={`text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter ${!isInitialLoading ? 'animate-title-entrance' : 'opacity-0'}`}>
              SPOT FINDER<span className="text-[#f26522]">.</span>
            </h1>
            <p className={`text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed ${!isInitialLoading ? 'animate-entrance stagger-1' : 'opacity-0'}`}>
              Your centralized platform for quick, confident decisions.<br />
              Discover more, Travel better.
            </p>
            <div className={`relative group max-w-3xl mx-auto ${!isInitialLoading ? 'animate-entrance stagger-2' : 'opacity-0'}`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f26522] to-orange-400 rounded-[2rem] blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
              <div className="relative flex items-center">
                <i className="fas fa-search absolute left-6 text-slate-400 text-lg group-focus-within:text-[#f26522] transition-colors"></i>
                <input 
                  type="text" 
                  placeholder="Search food, restaurants, places..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-16 pl-16 pr-6 rounded-[1.5rem] bg-white text-slate-900 shadow-2xl border-none focus:ring-0 transition-all text-lg outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </header>

        <div className={`max-w-[1400px] mx-auto -mt-20 relative z-30 px-6 ${!isInitialLoading ? 'animate-entrance stagger-3' : 'opacity-0'}`}>
          <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-900/10 border border-slate-100 p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center px-4">
              <p className="text-4xl font-black text-[#f26522] mb-1">
                <CountUp end={8} suffix="+" active={!isInitialLoading} />
              </p>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Major Areas</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-black text-[#f26522] mb-1">
                <CountUp end={50} suffix="+" active={!isInitialLoading} />
              </p>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Curated Spots</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-black text-[#f26522] mb-1">
                <CountUp end={1} active={!isInitialLoading} />
              </p>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Active City</p>
            </div>
            <div className="text-center px-4">
              <p className="text-2xl md:text-3xl font-black text-slate-200 mb-1 leading-tight mt-1">Coming soon</p>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Tourist Guide</p>
            </div>
          </div>
        </div>

        <main id="explore" className={`max-w-[1600px] mx-auto px-6 py-24 relative z-20 ${!isInitialLoading ? 'animate-entrance stagger-4' : 'opacity-0'}`}>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Places in Coimbatore</h2>
            <div className="h-px flex-grow bg-slate-200/60"></div>
            <span className="hidden md:inline-block text-[11px] font-black text-slate-400 bg-white border border-slate-100 px-5 py-2.5 rounded-xl uppercase tracking-[0.2em] shadow-sm">
              Explore Verified Locations
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {areas.map((area, idx) => (
              <button
                key={area}
                onClick={() => handleAreaSelect(area)}
                className={`group relative bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left overflow-hidden h-full flex flex-col justify-between ${!isInitialLoading ? 'animate-in fade-in slide-in-from-bottom-8 duration-700' : 'opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms`, animationDelay: `${500 + (idx * 50)}ms` }}
              >
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-orange-50 group-hover:scale-150 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f26522] group-hover:text-white transition-colors duration-500">
                    <i className="fas fa-map-location-dot text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-[#f26522] transition-colors leading-tight">
                    {area}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 leading-relaxed mb-6 group-hover:text-slate-500 transition-colors">
                    {getAreaDescription(area)}
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                         <i className="fas fa-circle-user text-slate-300"></i>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                    {restaurantData[area].length} Spots
                  </span>
                </div>
              </button>
            ))}
          </div>
        </main>

        <footer className="bg-[#0a0a0c] text-white pt-32 pb-16 px-6 relative z-20">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={handleBack}>
                  <div className="w-12 h-12 bg-[#f26522] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <i className="fas fa-location-dot text-white text-lg"></i>
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter uppercase">SPOT FINDER</h2>
                </div>
                <p className="text-slate-500 text-xl leading-relaxed max-w-lg">
                  A tourist-friendly platform that simplifies city exploration.
                </p>
              </div>
              <div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Contact</p>
                <div className="space-y-4">
                  <a href="mailto:250371761042110@cit.edu.in" className="block text-slate-400 hover:text-[#f26522] transition-colors text-sm font-medium">250371761042110@cit.edu.in</a>
                  <a href="mailto:2503717610421076@cit.edu.in" className="block text-slate-400 hover:text-[#f26522] transition-colors text-sm font-medium">2503717610421076@cit.edu.in</a>
                  <a href="mailto:2503717610422077@cit.edu.in" className="block text-slate-400 hover:text-[#f26522] transition-colors text-sm font-medium">2503717610422077@cit.edu.in</a>
                  <a href="mailto:2503717610422080@cit.edu.in" className="block text-slate-400 hover:text-[#f26522] transition-colors text-sm font-medium">2503717610422080@cit.edu.in</a>
                </div>
              </div>
              <div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Quick Links</p>
                <div className="space-y-6">
                  <button onClick={handleBack} className="block text-slate-400 hover:text-white transition-colors text-lg text-left w-full font-medium">Home</button>
                  <button onClick={() => setIsAboutOpen(true)} className="block text-slate-400 hover:text-white transition-colors text-lg text-left w-full font-medium">About Us</button>
                </div>
              </div>
            </div>

            {/* Noticeable Disclaimer Section */}
            <div className="py-12 border-t border-white/5 flex flex-col items-center">
              <div className="w-full max-w-2xl bg-orange-500/10 border border-orange-500/20 p-8 rounded-[2rem] text-center backdrop-blur-sm mb-12">
                <h4 className="text-[#f26522] text-xl font-black uppercase tracking-[0.2em] mb-4">@Disclaimer</h4>
                <p className="text-slate-300 text-lg font-medium">The prices of menu may vary from the original.</p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">© 2026 GalaxyDrive</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* VIEW 2: PLACE DETAILS - REDESIGNED */}
      <div 
        className={`transition-all duration-700 ease-in-out transform origin-center ${
          !isBrowsingAreas 
            ? 'scale-100 opacity-100 blur-0' 
            : 'scale-[0.6] opacity-0 blur-lg pointer-events-none fixed top-0 left-0 w-full h-screen overflow-hidden'
        }`}
      >
        {/* Neighborhood Hero Banner */}
        <header className="relative h-[450px] w-full overflow-hidden">
          <img 
            src={`https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop`} 
            className="w-full h-full object-cover scale-110 blur-[1px]" 
            alt="Neighborhood Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf7] via-black/30 to-black/60"></div>
          
          <div className="absolute inset-0 max-w-[1600px] mx-auto px-6 flex flex-col justify-center">
            <button 
              onClick={handleBack}
              className="text-white/80 hover:text-white mb-6 flex items-center gap-2 font-bold uppercase tracking-widest text-xs transition-colors w-fit group"
            >
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> BACK TO PLACES
            </button>
            <h2 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
              {selectedArea || 'Explore'}
            </h2>
            <div className="flex items-center gap-3">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                <i className="fas fa-location-dot"></i> Primary Landmark: {selectedArea ? getAreaLandmark(selectedArea) : 'Coimbatore'}
              </span>
            </div>
          </div>
        </header>

        <main className="max-w-[1600px] mx-auto px-6 py-12 -mt-16 relative z-10">
          {/* Section Header with Stats and Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 bg-[#fcfaf7] pt-8 rounded-t-[3rem]">
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Curated Spots</h3>
              <p className="text-slate-400 mt-1 font-medium">We found {totalFilteredCount} local favorites for you.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Search Within Context */}
              <div className="relative group w-full sm:w-72">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f26522] to-orange-400 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
                <div className="relative flex items-center">
                  <i className="fas fa-search absolute left-5 text-slate-400 text-sm group-focus-within:text-[#f26522] transition-colors"></i>
                  <input 
                    type="text" 
                    placeholder="Search in results..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-12 pl-12 pr-5 rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-100 focus:ring-2 focus:ring-[#f26522]/20 focus:border-[#f26522] transition-all text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Price Pill Filters */}
              <div className="flex items-center bg-white p-1.5 rounded-full shadow-sm border border-slate-100 overflow-x-auto max-w-full no-scrollbar">
                {['All', 'Budget', 'Mid-range', 'Premium'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPriceFilter(cat as any)}
                    className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${priceFilter === cat ? 'bg-[#f26522] text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-24">
            {totalFilteredCount > 0 ? (
              (Object.entries(filteredResults) as [string, Restaurant[]][]).map(([area, hotels]) => (
                <section key={area}>
                  {(searchTerm && !selectedArea) && (
                    <div className="flex items-center gap-6 mb-10">
                      <span className="text-xs font-black text-white bg-slate-900 px-4 py-2 rounded-lg uppercase tracking-widest">{area}</span>
                      <div className="h-px flex-grow bg-slate-200"></div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {hotels.map((hotel, idx) => (
                      <div key={`${hotel.name}-${idx}`} className="animate-reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <RestaurantCard 
                          restaurant={hotel} 
                          area={area} 
                          priceCategory={getPriceCategory(hotel)}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="text-center py-40 bg-white rounded-[4rem] shadow-sm border border-slate-100 max-w-5xl mx-auto">
                <div className="w-28 h-28 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-10 text-slate-200">
                  <i className="fas fa-search text-5xl"></i>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">No matches found</h3>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">Try adjusting your filters or search keywords to find what you're looking for.</p>
                <button 
                  onClick={() => { setPriceFilter('All'); setSearchTerm(''); }}
                  className="mt-4 px-10 py-5 bg-[#f26522] text-white rounded-[2rem] font-black text-lg hover:bg-[#d9541a] transition-all shadow-xl shadow-orange-100"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>

          {/* Place Details Bottom Disclaimer */}
          <div className="mt-32 pt-16 border-t border-slate-200 flex flex-col items-center">
            <div className="w-full max-w-2xl bg-[#f26522]/5 border border-[#f26522]/10 p-8 rounded-[2rem] text-center backdrop-blur-sm mb-12">
              <h4 className="text-[#f26522] text-xl font-black uppercase tracking-[0.2em] mb-4">@Disclaimer</h4>
              <p className="text-slate-500 text-lg font-medium">The prices of menu may vary from the original.</p>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-12">© 2026 GalaxyDrive</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;