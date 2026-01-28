
import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: (tab: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-[10s] hover:scale-100"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=1920&h=1080&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Season 32 META Live
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 leading-tight">
            DOMINATE THE <br />
            <span className="text-mlbb-gold drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">LAND OF DAWN</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Level up your gameplay with real-time META statistics, pro-builds, 
            and advanced macro tutorials designed for mythic climbers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onCtaClick('meta')}
              className="flex items-center justify-center gap-2 px-8 py-4 gold-gradient rounded-full font-bold text-slate-900 hover:scale-105 transition-all shadow-lg hover:shadow-amber-500/20"
            >
              Check META Heroes <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => onCtaClick('guides')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full font-bold text-white transition-all"
            >
              Start Learning <PlayCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
