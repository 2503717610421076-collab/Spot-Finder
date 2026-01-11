import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Restaurant, MenuItem, Review } from '../types';
import ReviewSystem from './ReviewSystem';

interface RestaurantCardProps {
  restaurant: Restaurant;
  area: string;
  priceCategory?: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, area, priceCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [avgRating, setAvgRating] = useState(restaurant.rating.split(' ')[0]);

  // High-quality, curated category-specific image pools
  const categoryPools = {
    SOUTH_INDIAN: [
      '1589302168068-964664d93dc0', // Dosa on leaf
      '1668236543090-82eba5ee5976', // Idli Vada sambar
      '1516684732162-798a0062be99', // South Indian breakfast
    ],
    BIRYANI: [
      '1633945274005-0d47d01927f0', // High quality Biryani
      '1589187151032-aa73ac6d9fbc', // Spiced rice dish
      '1631515233361-55c12f70b246', // Chicken Biryani platter
    ],
    FAST_FOOD: [
      '1561758033-d89a9ad46330', // Burger
      '1513104890138-7c7496df915c', // Pizza
      '1565299624-897ad517ad75', // Sandwich
      '1594212699903-ec8a3eca50f5', // Hot dog
    ],
    CAFE: [
      '1544787210-282d9de921a1', // Coffee art
      '1559496417-e7f25cb247f3', // Hot tea pouring
      '1512621776951-a57141f2eefd', // Healthy juice/salad
    ],
    MEALS: [
      '1626074353765-517a681e40be', // Indian Thali
      '1504674900247-0877df9cc836', // Massive food spread
      '1601050694115-991d8d9ad7bc', // Traditional meal
    ],
    NON_VEG: [
      '1604908176997-125f25cc6f38', // Roasted chicken
      '1534352956279-b240504f33da', // Meat starter
      '1529193591184-58f469a580ef', // Grilled fish
    ]
  };

  // General high-quality food pool for fallbacks
  const uniqueFoodPool = [
    '1540189549336-e6e99c3679fe', '1565958011-c121408889bd', '1567622658-0834d0149061',
    '1555939594-58d7cb561ad1', '1490645935967-10de6ba17051', '1514933651103-005eec06c04b',
    '1504753793650-d4a2ba783c1f', '1476224203421-9ac39933077e', '1473093226795-af9932fe5856',
    '1498837167721-c003097010bb', '1470333738114-1100f885e909', '1515003339414-8862174c74af'
  ];

  const getHashedImage = (salt: string, pool: string[]) => {
    let hash = 0;
    for (let i = 0; i < salt.length; i++) {
      hash = (hash << 5) - hash + salt.charCodeAt(i);
      hash |= 0; 
    }
    const index = Math.abs(hash) % pool.length;
    return `https://images.unsplash.com/photo-${pool[index]}?q=80&w=1200&auto=format&fit=crop`;
  };

  const foodImage = useMemo(() => {
    const name = restaurant.name.toLowerCase();
    const special = restaurant.special.toLowerCase();
    const salt = `${restaurant.name}-${area}-${restaurant.address}`;

    // Cuisine detection logic
    if (special.includes('biriyani') || special.includes('biryani') || name.includes('biriyani')) {
      return getHashedImage(salt, categoryPools.BIRYANI);
    }
    if (special.includes('meals') || special.includes('thali')) {
      return getHashedImage(salt, categoryPools.MEALS);
    }
    if (special.includes('dosa') || special.includes('idli') || special.includes('tiffin') || special.includes('south indian')) {
      return getHashedImage(salt, categoryPools.SOUTH_INDIAN);
    }
    if (special.includes('burger') || special.includes('pizza') || special.includes('sandwich') || name.includes('burg') || name.includes('chickburg')) {
      return getHashedImage(salt, categoryPools.FAST_FOOD);
    }
    if (special.includes('tea') || special.includes('coffee') || special.includes('beverages') || name.includes('cafe') || name.includes('kappi')) {
      return getHashedImage(salt, categoryPools.CAFE);
    }
    if (special.includes('mutton') || special.includes('chicken') || special.includes('fish') || special.includes('non-veg')) {
      return getHashedImage(salt, categoryPools.NON_VEG);
    }

    // Default high quality fallback
    return getHashedImage(salt, uniqueFoodPool);
  }, [restaurant.name, restaurant.address, restaurant.special, area]);

  const highlights = useMemo(() => {
    const allItems: string[] = [];
    Object.values(restaurant.menu).forEach(section => {
      section?.forEach(item => {
        if (Array.isArray(item) && item[0]) allItems.push(item[0]);
      });
    });
    return allItems.slice(0, 3);
  }, [restaurant.menu]);

  const displayPriceRange = useMemo(() => {
    const prices: number[] = [];
    Object.values(restaurant.menu).forEach(section => {
      section?.forEach(item => {
        if (typeof item[1] === 'number') prices.push(item[1]);
        else if (typeof item[1] === 'string') {
          const firstNum = item[1].split(/–|-/)[0].replace(/[^0-9]/g, '');
          const p = parseInt(firstNum);
          if (!isNaN(p)) prices.push(p);
        }
      });
    });
    if (!prices.length) return "₹50 - ₹150";
    return `₹${Math.min(...prices)} - ₹${Math.max(...prices)}`;
  }, [restaurant.menu]);

  const hoursDetail = useMemo(() => {
    const parts = restaurant.hours.split(/–|\||-/).map(p => p.trim());
    return {
      start: parts[0] || 'N/A',
      end: parts[1] || 'N/A'
    };
  }, [restaurant.hours]);

  const handleMapClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const query = `${restaurant.name}, ${area}, ${restaurant.address}`;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => { setIsModalOpen(false); setIsClosing(false); }, 400);
  };

  const getSectionIcon = (section: string) => {
    switch (section.toLowerCase()) {
      case 'breakfast': return 'fa-cloud-sun text-amber-500';
      case 'lunch': return 'fa-sun text-orange-500';
      case 'dinner': return 'fa-moon text-indigo-500';
      default: return 'fa-utensils text-[#f26522]';
    }
  };

  return (
    <>
      <div className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col sm:flex-row group h-full">
        <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
          <img 
            src={foodImage} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            alt={restaurant.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop";
            }}
          />
          {priceCategory && (
            <div className="absolute top-6 left-6">
              <span className="bg-[#f26522] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl shadow-2xl">
                {priceCategory}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 hidden sm:block"></div>
        </div>

        <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-[#f26522] transition-colors pr-4">
                {restaurant.name}
              </h3>
              <span className="bg-orange-50 text-[#f26522] px-3 py-1.5 rounded-xl text-sm font-black flex items-center gap-2 flex-shrink-0">
                <i className="fas fa-star text-[10px]"></i> {avgRating}
              </span>
            </div>
            
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2">
              {restaurant.special}.
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-2 bg-slate-50 w-fit px-3 py-1.5 rounded-lg text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100/50">
                <i className="fas fa-clock text-[#f26522]"></i> {restaurant.hours}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-4">Highlights</p>
              <div className="flex flex-wrap gap-2.5">
                {highlights.map(tag => (
                  <span key={tag} className="bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-slate-50">
            <div>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-1">Price Range</p>
              <p className="text-xl font-black text-slate-900 tracking-tight">{displayPriceRange}</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#f26522] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-[#d9541a] transition-all flex items-center gap-3 shadow-xl shadow-orange-100 group-hover:translate-x-1"
            >
              Full Details <i className="fas fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
          <div 
            className={`absolute inset-0 bg-slate-900/60 ${isClosing ? 'animate-modal-overlay-exit' : 'animate-modal-overlay'}`}
            onClick={closeModal}
          ></div>
          
          <div className={`relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden ${isClosing ? 'animate-modal-content-exit' : 'animate-modal-content'}`}>
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10 shadow-sm">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{restaurant.name}</h3>
                <p className="text-[#f26522] font-bold text-xs uppercase tracking-widest mt-1 flex items-center gap-2">
                  <i className="fas fa-location-dot text-[10px]"></i>
                  {area}
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal stagger-1">
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Operating Schedule</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-6">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                        <i className="fas fa-clock text-sm"></i>
                      </div>
                      <div className="flex gap-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Starts</span>
                          <span className="text-sm font-black text-slate-800">{hoursDetail.start}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ends</span>
                          <span className="text-sm font-black text-slate-800">{hoursDetail.end}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100/50">
                    <p className="text-xs font-bold text-[#f26522] uppercase tracking-widest mb-2">Location</p>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{restaurant.address}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Must Try</h4>
                  <div className="bg-orange-50 border border-orange-100 p-5 rounded-3xl flex items-center gap-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-500">
                       <i className="fas fa-crown text-5xl text-orange-600"></i>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                      <i className="fas fa-crown text-xl"></i>
                    </div>
                    <div className="relative z-10">
                      <p className="text-sm text-orange-900 font-black leading-tight uppercase tracking-wide">
                        {restaurant.special}
                      </p>
                      <p className="text-[10px] text-orange-600 font-bold mt-1 uppercase tracking-widest">House Specialty</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4 animate-reveal stagger-2">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Full Menu Guide</h4>
                  <div className="h-px w-full bg-slate-100"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(restaurant.menu).map(([section, items], idx) => (
                    <div key={section} className={`bg-slate-50/50 rounded-[2rem] p-6 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group/section animate-reveal stagger-${idx + 3}`}>
                      <div className="flex items-center justify-between mb-6">
                        <h5 className="text-lg font-black text-slate-900 flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover/section:scale-110 transition-transform`}>
                            <i className={`fas ${getSectionIcon(section)} text-base`}></i>
                          </div>
                          {section}
                        </h5>
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{(items as MenuItem[]).length} items</span>
                      </div>
                      
                      <div className="space-y-4">
                        {(items as MenuItem[]).map((item, idx) => (
                          <div key={idx} className="flex justify-between items-start text-sm group/item">
                            <span className="text-slate-700 font-semibold group-hover/item:text-[#f26522] transition-colors leading-snug max-w-[70%]">{item[0]}</span>
                            <div className="flex-grow mx-3 border-b border-dotted border-slate-200 mt-3.5 opacity-40"></div>
                            <span className="text-emerald-600 font-black whitespace-nowrap bg-emerald-50 px-2 py-0.5 rounded-lg">
                              {typeof item[1] === 'number' ? `₹${item[1]}` : item[1]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-reveal stagger-5">
                <ReviewSystem 
                  restaurantName={restaurant.name} 
                  officialRating={restaurant.rating} 
                />
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleMapClick}
                className="flex-1 py-4 px-6 rounded-2xl font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95"
              >
                <i className="fas fa-location-arrow text-[#f26522]"></i> Get Directions
              </button>
              <button 
                onClick={closeModal}
                className="flex-1 py-4 px-6 rounded-2xl font-bold bg-[#f26522] text-white hover:opacity-90 shadow-lg transition-all active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default RestaurantCard;