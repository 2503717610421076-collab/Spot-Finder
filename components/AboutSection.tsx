
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { teamMembers } from '../data';

interface AboutSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        document.body.style.overflow = 'unset';
      }, 400);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const handleClose = () => {
    setIsClosing(true);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
      <div 
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md ${isClosing ? 'animate-modal-overlay-exit' : 'animate-modal-overlay'}`}
        onClick={handleClose}
      ></div>
      
      <div className={`relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden ${isClosing ? 'animate-modal-content-exit' : 'animate-modal-content'}`}>
        {/* Modal Header */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f26522] rounded-xl flex items-center justify-center text-white">
              <i className="fas fa-info text-sm"></i>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase">About Us</h3>
          </div>
          <button 
            onClick={handleClose}
            className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors flex items-center justify-center active:scale-90"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full mb-8 animate-reveal">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-[10px] font-black uppercase tracking-widest">Our Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight animate-reveal stagger-1">
              Simplifying Urban Discovery <br />
              <span className="text-[#f26522]">for Every Traveler.</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg animate-reveal stagger-2">
              <p>
                Traveling to a new city opens the door to new experiences, but it also comes with challenges. Tourists often feel overwhelmed when trying to decide where to go, what to explore, and how to plan efficiently due to the lack of organized and reliable information in one place.
              </p>
              <p>
                Our platform was created to bridge this gap by offering a centralized, tourist-friendly web solution that simplifies decision-making. Instead of relying on multiple apps or random searches, users can access curated, structured, and easy-to-understand information designed to guide them through unfamiliar cities with confidence.
              </p>
              <p>
                The website is built with a strong focus on usability and accessibility, ensuring a smooth experience across mobile devices, laptops, and desktop systems. Clean layouts, intuitive navigation, and subtle animations are used to enhance user experience without adding complexity.
              </p>
              <p>
                Currently, the platform focuses on presenting essential, well-organized information to help travelers make quick and informed choices. As the platform evolves, we plan to expand its scope by integrating tourist attractions, estimated costs, and travel guidance, gradually transforming it into a comprehensive travel companion.
              </p>
              <p className="font-semibold text-slate-800">
                Our vision is to create a reliable digital guide that helps travelers explore new cities effortlessly, confidently, and without confusion, making every journey more enjoyable from start to finish.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex items-center gap-4 mb-10 animate-reveal stagger-3">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter whitespace-nowrap">TEAM MEMBERS :</h3>
               <div className="h-px flex-grow bg-slate-100"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {teamMembers.map((member, idx) => (
                <div key={member.name} className={`group bg-[#f0f4ff] rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-2 border border-transparent hover:border-indigo-100 animate-reveal stagger-${idx + 4}`}>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <i className={`fas ${member.icon} text-3xl text-[#4b0082]`}></i>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 group-hover:text-[#4b0082] transition-colors">{member.name}</h4>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-all">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-center sticky bottom-0 z-10">
          <button 
            onClick={handleClose}
            className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-black transition-all active:scale-95 shadow-xl shadow-slate-900/10"
          >
            CLOSE GUIDE
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AboutSection;
