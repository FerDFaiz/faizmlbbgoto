
import React, { useState, useMemo } from 'react';
import { Search, Filter, Shield, Sword, Ghost, Sparkles, Crosshair, HeartPulse, ChevronDown, ChevronUp } from 'lucide-react';
import { HEROES } from '../constants';
import { Role, Tier, Hero } from '../types';

// Updated RoleIcon to accept and apply the className prop
const RoleIcon = ({ role, size = 18, className }: { role: Role; size?: number; className?: string }) => {
  switch (role) {
    case Role.TANK: return <Shield size={size} className={className} />;
    case Role.FIGHTER: return <Sword size={size} className={className} />;
    case Role.ASSASSIN: return <Ghost size={size} className={className} />;
    case Role.MAGE: return <Sparkles size={size} className={className} />;
    case Role.MARKSMAN: return <Crosshair size={size} className={className} />;
    case Role.SUPPORT: return <HeartPulse size={size} className={className} />;
  }
};

const HeroCard = ({ hero }: { hero: Hero }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const tierColors = {
    [Tier.S]: 'bg-red-600 text-white',
    [Tier.A]: 'bg-amber-500 text-slate-900',
    [Tier.B]: 'bg-blue-500 text-white',
    [Tier.C]: 'bg-slate-600 text-white',
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all group">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={hero.image} 
          alt={hero.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <div className={`${tierColors[hero.tier]} px-3 py-1 rounded text-sm font-bold shadow-lg`}>
            {hero.tier} Tier
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <div className="bg-slate-950/80 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-full flex items-center gap-2 text-xs font-semibold">
            <RoleIcon role={hero.role} size={14} className="text-mlbb-blue" />
            {hero.role}
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-orbitron">{hero.name}</h3>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex justify-between items-center py-2 px-4 bg-slate-800/50 rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
        >
          {isExpanded ? 'Hide Pro Build' : 'View Pro Build'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
            <div>
              <p className="text-xs text-mlbb-gold uppercase font-bold tracking-widest mb-2">Essential Items</p>
              <div className="grid grid-cols-3 gap-2">
                {hero.build.items.map((item, idx) => (
                  <div key={idx} className="bg-slate-800 p-2 rounded text-[10px] text-center border border-slate-700 hover:border-mlbb-gold/30 truncate">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs text-mlbb-blue uppercase font-bold tracking-widest mb-1">Emblem</p>
                <p className="text-[11px] text-gray-300">{hero.build.emblem}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-mlbb-blue uppercase font-bold tracking-widest mb-1">Spell</p>
                <p className="text-[11px] text-gray-300">{hero.build.spell}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div>
                <p className="text-[10px] text-green-400 font-bold mb-1">STRENGTHS</p>
                <ul className="text-[10px] text-gray-400 list-disc list-inside">
                  {hero.strengths.slice(0, 2).map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-[10px] text-red-400 font-bold mb-1">WEAKNESSES</p>
                <ul className="text-[10px] text-gray-400 list-disc list-inside">
                  {hero.weaknesses.slice(0, 2).map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MetaPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | 'All'>('All');

  const filteredHeroes = useMemo(() => {
    return HEROES.filter(hero => {
      const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === 'All' || hero.role === selectedRole;
      return matchesSearch && matchesRole;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedRole]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-orbitron font-bold mb-2">HERO <span className="text-mlbb-gold">DATABASE</span></h2>
          <p className="text-gray-400">A-Z Directory - Season 32 Analysis</p>
        </div>

        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search hero..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-mlbb-blue text-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {['All', ...Object.values(Role)].map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role as any)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedRole === role 
                    ? 'gold-gradient text-slate-950' 
                    : 'bg-slate-900 text-gray-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
            <p className="text-gray-500 text-lg">No heroes found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetaPage;
